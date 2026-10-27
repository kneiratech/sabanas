# Deploy en Azure (App Service + Azure DevOps)

La app se compila como **Next.js standalone** (`output: "standalone"` en `next.config.mjs`)
y se publica en **Azure App Service Linux (Node 22 LTS)** con `azure-pipelines.yml`.

```
push a main ──► Build (npm ci → lint → next build → zip standalone) ──► Deploy (AzureWebApp@1)
```

## 1. Crear los recursos en Azure

Con [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) (`az login` primero).
Los nombres son ejemplos: el del Web App debe ser único en todo Azure.

```bash
az group create --name rg-lino-luna --location eastus2

az appservice plan create --name plan-lino-luna --resource-group rg-lino-luna --sku B1 --is-linux

az webapp create --name lino-luna-web --resource-group rg-lino-luna --plan plan-lino-luna --runtime "NODE:22-lts"

az webapp config set --name lino-luna-web --resource-group rg-lino-luna --startup-file "sh startup.sh"
```

> El plan **B1** (~13 USD/mes) es el mínimo recomendado; **F1** (gratis) funciona para pruebas
> pero se apaga por inactividad y tiene cuota de CPU diaria.

## 2. Configurar Azure DevOps

1. Sube esta carpeta (`bedsheets-landing`) como su **propio repositorio** (Azure Repos o GitHub).
   El pipeline espera `package.json` y `azure-pipelines.yml` en la raíz del repo.
2. **Project settings → Service connections → New → Azure Resource Manager**
   (Workload identity federation, recomendado). Elige la suscripción y el grupo `rg-lino-luna`.
   Nómbrala `azure-lino-luna` (o cambia `azureSubscription` en el YAML).
3. **Pipelines → New pipeline →** elige el repo → *Existing Azure Pipelines YAML file* → `/azure-pipelines.yml`.
4. Si cambiaste el nombre del Web App, actualiza la variable `webAppName` del YAML.
5. Ejecuta el pipeline. La primera vez Azure DevOps pedirá permiso para usar la service
   connection y el environment `production`.

Opcional: en **Pipelines → Environments → production → Approvals and checks** agrega una
aprobación manual antes de cada deploy.

## 3. Verificar

```bash
az webapp browse --name lino-luna-web --resource-group rg-lino-luna
az webapp log tail --name lino-luna-web --resource-group rg-lino-luna
```

## Probar el paquete standalone en local

```bash
npm run build
cp -r public .next/standalone/public && cp -r .next/static .next/standalone/.next/static
node .next/standalone/server.js
```
