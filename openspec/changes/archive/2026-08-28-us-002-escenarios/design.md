## Context

Los recursos visuales del proyecto (escenarios y personajes) deben montarse en el DOM. Existen dos fondos ("escenario normal" y "escenario espiritual"), y varios objetos frontales (ángeles, demonios, nubes), además del "principal" que es el personaje global. El viewport mostrará los escenarios horizontalmente: el usuario scrollea para pasar de uno a otro.

## Goals / Non-Goals

**Goals:**
- Mover la carpeta `img/` a `public/img/` para que Vite la sirva y los assets sean accesibles estáticamente, respetando el base path.
- Crear componente `MainCharacter` que esté siempre fijo (usando `position: fixed` o `sticky`).
- Crear la tira horizontal de fondos (`NormalScenario`, `SpiritualScenario`) que se mueven al scrollear.
- Posicionar los objetos (ángeles, demonios, nubes) en sus respectivos escenarios.

**Non-Goals:**
- Las interacciones táctiles (tocar demonios para que reaccionen) no entran en este change (corresponden a `us-003`).

## Decisions

- **Estructura HTML de capas:** Se usará un enfoque clásico de parallax 2.5D. Una capa de "fondo" (escenarios), una de "medio" (objetos flotantes) y una "frontal" (personaje principal).
- **Manejo de Assets:** Las imágenes se referenciarán con `import.meta.env.BASE_URL + 'img/nubes.jpg'` o directamente `/img/...` en conjunción con el base config de Vite.
- **Tamaños y Proporciones:** Las imágenes dictarán la proporción. Usaremos `height: 100vh` u `object-fit: cover` para asegurar que ocupen toda la pantalla del móvil, y el ancho se escalará automáticamente.

## Risks / Trade-offs

- **Riesgo de carga lenta:** Cargar muchas imágenes gigantes puede mostrar pantalla en blanco inicialmente.
- **Mitigación:** Preload del "escenario normal" y del "principal" en el `index.html` (tarea para el sprint de optimización `us-004`).
