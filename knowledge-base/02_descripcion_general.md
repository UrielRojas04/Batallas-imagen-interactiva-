# Descripción General

## Stack tecnológico
| Capa | Tecnologías | Versión mínima |
|------|-------------|----------------|
| **Frontend** | React + JavaScript (JSX) | 19.x |
| **Tooling** | Vite | 8.x |
| **Estilos** | CSS Plano / CSS Modules | N/A |
| **Linter** | Oxlint | 1.x |
| **Infraestructura** | GitHub Pages | N/A |

## Arquitectura general
Sistema de una sola página (SPA) completamente estático. Todo el proyecto se ejecuta íntegramente en el navegador del cliente ("Backendless").

```text
[ Visitante Mobile ]
        │
    (Touch / Scroll)
        ▼
[ React 19 (UI) ] ─── [ Context API (Estado de Escenarios) ]
        │
    (Orquestación)
        ▼
[ Vanilla JS (requestAnimationFrame) ]
        │
    (Cálculos y Variables)
        ▼
[ DOM / CSS (Parallax rendering con CSS Vars) ]
```

**Justificación de diseño**:
Dada la altísima prioridad de mantener 60fps moviendo gráficos enormes (los escenarios de batalla), se evita acoplar el renderizado del parallax al ciclo de vida tradicional de React. React se encarga de orquestar el estado global (Context) y montar la estructura, pero los cálculos frame-a-frame del parallax y movimiento se delegan a Vanilla JS, actualizando Custom Properties (Variables de CSS) de forma directa en el DOM para forzar la aceleración por hardware por parte del navegador.

## Integraciones externas
| Servicio | Propósito | Tipo (REST/webhook/SDK) |
|----------|-----------|-------------------------|
| Ninguno | Proyecto 100% autónomo y autocontenido. | N/A |

## API REST (si aplica)
**N/A**. Todo el "modelo" de escenarios se define estáticamente en el código fuente (arrays/objetos JS estructurados en memoria).
