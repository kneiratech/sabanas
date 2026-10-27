#!/bin/sh
# Comando de inicio para Azure App Service (Linux).
# App Service define HOSTNAME con el nombre del contenedor; Next debe escuchar en todas las interfaces.
export HOSTNAME=0.0.0.0
export PORT="${PORT:-8080}"
exec node server.js
