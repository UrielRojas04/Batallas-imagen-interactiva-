# Batallas de la Ilustración — Base de Conocimiento

Base de conocimiento generada para documentar la arquitectura, decisiones y propósito del proyecto estático e interactivo.

## Índice de Archivos

| Archivo | Contenido |
|---------|-----------|
| [01_vision_y_objetivos.md](01_vision_y_objetivos.md) | Propósito, métricas y alcance del MVP. |
| [02_descripcion_general.md](02_descripcion_general.md) | Stack, despliegue y arquitectura sin backend. |
| [03_actores_y_roles.md](03_actores_y_roles.md) | Espectadores y flujos públicos. |
| [04_modelo_de_datos.md](04_modelo_de_datos.md) | Estructura de escenarios en memoria. |
| [05_reglas_de_negocio.md](05_reglas_de_negocio.md) | Físicas de interacción y parallax. |
| [06_funcionalidades.md](06_funcionalidades.md) | Interacciones core y navegación. |
| [07_flujos_principales.md](07_flujos_principales.md) | Optimización y carga de assets. |
| [08_arquitectura_propuesta.md](08_arquitectura_propuesta.md) | Estructura de frontend y patrones (Context). |
| [09_decisiones_y_supuestos.md](09_decisiones_y_supuestos.md) | Justificación de Vanilla JS vs librerías. |
| [10_preguntas_abiertas.md](10_preguntas_abiertas.md) | Pendientes de infraestructura y UI. |

## Quick Start para Desarrolladores

1. Entender el propósito como arte digital → [01](01_vision_y_objetivos.md)
2. Entender por qué no usamos frameworks pesados de animación → [08](08_arquitectura_propuesta.md), [09](09_decisiones_y_supuestos.md)
3. Estudiar cómo estructurar un escenario en código → [04](04_modelo_de_datos.md)
4. Entender el flujo crítico de carga en mobile → [07](07_flujos_principales.md)

## Resumen Ejecutivo

Imagen interactiva pensada *mobile-first* sobre la Ilustración. Opera puramente en frontend (React) simulando profundidad (parallax) al scrollear. No posee backend y prioriza el rendimiento a 60fps por sobre abstracciones complejas.
