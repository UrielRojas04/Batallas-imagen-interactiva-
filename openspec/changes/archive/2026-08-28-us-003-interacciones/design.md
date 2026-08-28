## Context

El componente `SpiritualScenario` tiene 4 objetos interactivos (2 ángeles y 2 demonios). El objetivo es que cuando el usuario toque uno de estos elementos en su celular, el elemento reaccione visualmente, dando una sensación lúdica.

## Goals / Non-Goals

**Goals:**
- Agregar lógica de interactividad a los ángeles y demonios usando `onClick`.
- Implementar una animación CSS (como un "shake" o "pop") que se dispare temporalmente cuando el estado `isInteracting` sea verdadero.

**Non-Goals:**
- Sonidos, contadores de puntajes o game loop complejo.

## Decisions

- **Animación vía CSS classes:** Se usará un estado local en los objetos (o componentes hijos separados si es más limpio) para manejar un toggle de una clase CSS `.interacting`.
- **Keyframes:** Se definirá `@keyframes pop` en `App.css` que hará un `transform: scale(1.1)` rápido y volverá a la normalidad, limpiando el estado con un `setTimeout` o dejando que CSS maneje la animación.

## Risks / Trade-offs

- **Riesgo:** Hacer componentes muy pesados.
- **Mitigación:** Extraer un sub-componente `InteractiveObject` genérico que encapsule el estado, la animación y el factor de parallax, manteniendo limpio `SpiritualScenario.jsx`.
