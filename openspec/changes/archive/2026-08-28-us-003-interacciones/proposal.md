## Why

Para darle vida a la experiencia, los objetos del escenario (como los demonios y los ángeles) deben reaccionar al ser tocados, incrementando el nivel de interacción de los usuarios en dispositivos móviles más allá del simple scroll.

## What Changes

- Se agregará lógica de estado (`useState`) y eventos (`onClick` / `onTouchStart`) a los elementos interactivos del `SpiritualScenario`.
- Se añadirán clases CSS para aplicar animaciones (ej: temblor, brillo, o cambio de escala) cuando el objeto es interactuado.

## Capabilities

### New Capabilities
- `interactions`: Interacciones y animaciones de respuesta táctil en objetos.

### Modified Capabilities
- Ninguna

## Impact

- Impacta a `SpiritualScenario.jsx` agregando estado interactivo.
- Impacta a `App.css` añadiendo keyframes de animación.
