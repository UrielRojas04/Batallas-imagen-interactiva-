## Why

Con el motor de parallax base funcional, es momento de integrar los recursos gráficos del proyecto. Esto permitirá que los usuarios naveguen horizontalmente entre el "escenario normal" y el "escenario espiritual", viendo a la figura principal fija mientras los fondos y otros elementos se mueven con efecto parallax.

## What Changes

- Creación de los componentes de capa: `MainCharacter` (fijo), `NormalScenario`, `SpiritualScenario`.
- Implementación de la estructura horizontal donde el escenario espiritual se encuentra a continuación del normal.
- Implementación del efecto parallax (velocidades diferentes de desplazamiento horizontal) calculando el offset con la variable CSS `--scroll-x`.
- Integración de los recursos de la carpeta `img/` (cargándolos desde la carpeta pública o vía imports de Vite).

## Capabilities

### New Capabilities
- `scenarios`: Componentes y estructura visual de los escenarios de la aplicación.

### Modified Capabilities
- Ninguna

## Impact

- Impacta a la carpeta `src/components`.
- Actualiza `App.jsx` y los estilos para renderizar los nuevos componentes.
- Aumenta significativamente el peso visual por la carga de imágenes.
