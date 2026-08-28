# Visión y Objetivos

## Propósito del sistema
Pieza de arte digital autoconclusiva e interactiva diseñada para mostrar habilidades técnicas y de ilustración. 
El sistema invita al usuario a explorar una batalla temática de la Ilustración a través de capas visuales y objetos que reaccionan de manera fluida en dispositivos móviles.

## Objetivos por actor
| Actor | Objetivo principal | Objetivos secundarios |
|-------|--------------------|-----------------------|
| **Visitante / Espectador** | Experimentar la obra visual sin interrupciones ni tiempos de carga molestos. | Descubrir micro-interacciones (tocar objetos para ver reacciones o movimientos leves). |

## Alcance v1.0
- Motor de scroll horizontal con parallax progresivo, fluido y atado al dedo.
- Escenarios estáticos predefinidos (hardcodeados) en memoria.
- Elemento principal constante sobre el viewport y elementos secundarios distribuidos por capa.
- Despliegue estático a GitHub Pages.

## Fuera de alcance
- Sistema de usuarios, login o analíticas de backend.
- Escalabilidad dinámica (leer escenarios desde una base de datos o CMS externo).
- Uso de librerías pesadas de animación (Framer Motion, GSAP) que perjudiquen el rendimiento en móviles de gama baja.

## Métricas de éxito
Al ser un portfolio o pieza artística, el éxito técnico se mide por la fluidez (alcanzar y mantener **60fps** en dispositivos móviles estándar) y el tiempo de carga inicial (`First Contentful Paint` veloz) aplicando compresión agresiva a los assets si el peso amenaza la performance.
