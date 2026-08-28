## Why

Las imágenes que componen los escenarios son pesadas. En dispositivos móviles, especialmente en conexiones lentas 3G/4G, el usuario puede experimentar pantallas en blanco o "pops" visuales a medida que los recursos se van descargando. La precarga garantiza que la experiencia inicial sea inmersiva e inmediata.

## What Changes

- Modificación de `index.html` para incluir etiquetas `<link rel="preload">` apuntando a las imágenes críticas (`principal.jpg` y `escenario normal.jpg`).
- Refinamiento de variables CSS y performance, asegurando `will-change: transform` en las capas (ya implementado en `us-002`, pero se verificará).

## Capabilities

### New Capabilities
- `performance`: Estrategias de optimización de carga y renderizado.

### Modified Capabilities
- Ninguna

## Impact

- Impacta el `index.html` del proyecto.
- Disminuye el tiempo percibido de carga de la pintura inicial (LCP).
