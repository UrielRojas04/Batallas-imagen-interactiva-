## Why

Para lograr la experiencia visual deseada en "Batallas de la Ilustración", necesitamos un motor de parallax fluido a 60fps que reaccione al scroll horizontal del usuario en dispositivos móviles sin usar librerías pesadas, garantizando rendimiento máximo.

## What Changes

- Creación del hook personalizado `useParallaxScroll` para rastrear la posición de scroll y aplicar variables CSS (`--scroll-x`) usando `requestAnimationFrame`.
- Modificación del layout base en `App.jsx` para soportar scroll horizontal.
- Creación de variables globales o lógica base para controlar los factores de velocidad de las distintas capas (parallax ratio).

## Capabilities

### New Capabilities
- `parallax-engine`: Motor base de scroll horizontal fluido para efecto parallax.

### Modified Capabilities
N/A

## Impact

- Agrega lógica de evento `scroll` global.
- Establece la base técnica para que los futuros escenarios y objetos puedan reaccionar a esta variable de scroll y moverse a diferentes velocidades.
