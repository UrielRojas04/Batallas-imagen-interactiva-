## Context

En conexiones móviles lentas, las imágenes `principal.jpg` y `escenario normal.jpg` tardarán en descargarse, provocando que la aplicación muestre un fondo negro (o blanco) vacío al inicio, arruinando la inmersión del "primer impacto".

## Goals / Non-Goals

**Goals:**
- Agregar etiquetas `<link rel="preload">` en el `index.html` para los assets más críticos.
- Garantizar que el navegador priorice la descarga de estas dos imágenes sobre el bundle de JS.

**Non-Goals:**
- Precargar los ángeles y demonios o el escenario espiritual (se asume que el usuario tardará unos segundos en hacer scroll hasta ahí, tiempo suficiente para que carguen perezosamente o en background normal).
- Implementar un "Loading Screen" completo con barra de progreso.

## Decisions

- **Preload tags:** Se agregarán tags en el `<head>` del `index.html`. Dado que los archivos están en `public/img/`, la ruta absoluta con el base path será clave. Vite resolverá `%VITE_BASE%` o directamente configuraremos las rutas con `/batallas-ilustracion/img/...` o permitiremos que Vite inyecte el BASE_URL si usamos su sintaxis de inyección en html. Para evitar problemas, Vite en su index.html nativo soporta `<link rel="preload" href="/img/principal.jpg" as="image">` y al hacer build con `--base`, reescribe las rutas que empiezan con `/` automáticamente.

## Risks / Trade-offs

- **Trade-off:** La precarga consume ancho de banda. Sin embargo, priorizar el LCP (Largest Contentful Paint) es una best-practice universal para web.
