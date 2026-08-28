## Context

El proyecto actual requiere una estructura fundacional que soporte el despliegue en GitHub Pages y las características futuras del sistema, que será completamente frontend. 

## Goals / Non-Goals

**Goals:**
- Configurar Vite de manera adecuada para el hosting estático (configuración de `base`).
- Crear el esqueleto de directorios estándar de React (`src/components`, `src/hooks`, `src/utils`).
- Proveer un Context global vacío preparado para recibir la lógica de los escenarios en el próximo change.
- Limpiar estilos que vienen por defecto y unificar márgenes y cajas (`box-sizing`).

**Non-Goals:**
- Implementar ninguna lógica de animación, scroll o parallax (eso corresponde a us-001).
- Importar o cargar assets pesados en este paso.

## Decisions

- **Vite config**: Se ajustará la propiedad `base` a `'/batallas-ilustracion/'` (o el nombre real del repo) para que las importaciones de imágenes funcionen en Github Pages.
- **Context API**: Se generará un `AppContext.jsx` o similar que expondrá un estado básico, en lugar de instalar Zustand, siguiendo las directivas de arquitectura de la KB.
- **CSS global**: Se ajustará `index.css` con reseteo universal `* { margin: 0; padding: 0; box-sizing: border-box; }` indispensable para un control fino en móviles.

## Risks / Trade-offs

- **Riesgo:** La configuración del base de Vite en GitHub pages a veces da problemas si no coincide exacto el nombre del repo. Mitigación: asegurarse de aplicar el nombre idéntico definido en GitHub.
