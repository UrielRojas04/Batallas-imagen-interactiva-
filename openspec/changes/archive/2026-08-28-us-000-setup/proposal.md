## Why

Necesitamos establecer la base del proyecto antes de poder implementar el motor de parallax o renderizar escenarios. Esto resuelve la falta de estructura actual y previene errores de despliegue en GitHub Pages.

## What Changes

- Configuración de Vite para soporte de despliegue en subdirectorios (GitHub Pages).
- Creación de la estructura de carpetas en `src/` (components, hooks, utils).
- Reseteo de estilos globales básicos.
- Configuración de React Context API vacío para orquestar futuros escenarios.

## Capabilities

### New Capabilities
- `project-setup`: Estructura base del frontend y despliegue estático.

### Modified Capabilities
- Ninguna

## Impact

- Afecta la configuración raíz del proyecto (`vite.config.js`).
- Impacta la estructura de directorios en `src/`.
- Prepara la base para todos los desarrollos futuros de frontend.
