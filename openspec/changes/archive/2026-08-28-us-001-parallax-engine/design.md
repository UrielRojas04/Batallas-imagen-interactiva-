## Context

Para la experiencia inmersiva mobile-first, necesitamos que las imágenes y escenarios se muevan en respuesta al scroll horizontal. Usar librerías de React y re-renderizar en cada pixel de scroll satura el main thread en celulares.

## Goals / Non-Goals

**Goals:**
- Capturar el evento de `scroll` horizontal de un contenedor principal.
- Utilizar `requestAnimationFrame` para derivar la posición del scroll a una variable CSS (`--scroll-x`) inyectada en el DOM de forma ultra optimizada.
- Preparar un contenedor principal que permita el scroll horizontal.

**Non-Goals:**
- Implementar los escenarios, las imágenes y la estructura visual final.

## Decisions

- **Inyección de CSS Variables:** En lugar de guardar el `scrollX` en el estado de React (lo cual causa re-renders masivos), se creará un hook `useParallaxEngine` que inyectará `document.documentElement.style.setProperty('--scroll-x', scrollValue)` usando Vanilla JS + requestAnimationFrame. 
- **Animación vía CSS:** Los futuros componentes simplemente usarán `transform: translateX(calc(var(--scroll-x) * var(--parallax-factor)))` de manera puramente declarativa en CSS (aceleración por GPU).
- **Contenedor:** El contenedor raíz de la aplicación tendrá `overflow-x: auto; overflow-y: hidden;` para generar el scroll horizontal natural del sistema operativo (que trae físicas y rebote gratis en móviles).

## Risks / Trade-offs

- **Trade-off:** La posición de scroll vive fuera del ciclo de vida de React, por lo que React "no sabe" exactamente dónde estamos durante la animación. Sin embargo, esto es un beneficio enorme de performance (60fps garantizados).
