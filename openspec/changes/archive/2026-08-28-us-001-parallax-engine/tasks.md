## 1. Parallax Engine Hook

- [x] 1.1 Crear `src/hooks/useParallaxEngine.js` que escuche el scroll de un contenedor y escriba `--scroll-x` en `document.documentElement.style` usando `requestAnimationFrame`.

## 2. Layout y Contenedor Principal

- [x] 2.1 Actualizar `App.jsx` agregando un contenedor principal (`.scroll-container`) que aplique el ref del hook y permita scroll.
- [x] 2.2 Agregar estilos en `src/index.css` para `.scroll-container` (100vw, 100vh, `overflow-x: auto`, `overflow-y: hidden`) y un bloque interior provisorio ancho para probar el scroll.
