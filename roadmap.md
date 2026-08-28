# Roadmap de Implementación

Mapa completo de changes para desarrollar **Batallas de la Ilustración** de inicio a fin.
Generado a partir de `knowledge-base/` (01 y 02) y `AGENTS.md`.

## Orden de ejecución

| # | Change | Funcionalidad | US | Depende de | Razón de la dependencia |
|---|--------|---------------|----|-----------|-----|
| 1 | `us-000-setup` | Infraestructura base, Vite config, Context API base | US-000 | — | Punto de partida |
| 2 | `us-001-parallax-engine` | Motor core de parallax en Vanilla JS + CSS Vars | US-001 | `us-000-setup` | Requiere estructura de proyecto |
| 3 | `us-002-escenarios` | Estructura en memoria y renderizado de capas base | US-002 | `us-001-parallax-engine` | Los fondos necesitan el motor para moverse |
| 4 | `us-003-interacciones` | Objetos reaccionando al touch y movimientos pasivos | US-003 | `us-002-escenarios` | Los objetos viven dentro de los escenarios |
| 5 | `us-004-optimizacion` | Precarga de imágenes y optimización de FCP | US-004 | `us-003-interacciones` | Refinamiento final de assets |

## Detalle por change

### `us-000-setup`
**Funcionalidad**: Configurar `vite.config.js` (con su `base`), crear la estructura de carpetas en `src/` (components, hooks, utils), estilos base (reseteo CSS) y montar el Provider de React Context vacío.
**US implementadas**: US-000
**Depende de**: ninguno.
**Justificación**: Todo código necesita un lugar donde vivir. Sin el setup de Vite, el build de GitHub Pages se va a romper.
**Riesgos / preguntas abiertas**: Ninguno crítico, tarea rutinaria.

### `us-001-parallax-engine`
**Funcionalidad**: Crear el `useParallax.js` (hook) o script Vanilla que corra un loop de `requestAnimationFrame`, intercepte el scroll u offset del usuario y exponga/aplique variables CSS como `--scroll-x` globalmente.
**US implementadas**: US-001
**Depende de**: `us-000-setup`
**Justificación**: Es el corazón del proyecto. Sin esto resuelto, montar componentes de UI es inútil porque no se van a mover. 
**Riesgos / preguntas abiertas**: Asegurar que la interceptación del touch/scroll sea hiper fluida en celulares gama baja.

### `us-002-escenarios`
**Funcionalidad**: Hardcodear la estructura de datos de `escenario normal.jpg` y `escenario espiritual.png`. Crear el componente `Scenario.jsx` que lea las variables CSS del motor para desplazar las capas. Incluir al objeto `principal.jpg` como fijo en pantalla.
**US implementadas**: US-002
**Depende de**: `us-001-parallax-engine`
**Justificación**: Ya tenemos motor, ahora le ponemos nafta (el contenido visual).
**Riesgos / preguntas abiertas**: ¿Manejamos los fondos como etiquetas `<img>` gigantes o como `background-image` en divs? Se definirá en el diseño del change.

### `us-003-interacciones`
**Funcionalidad**: Agregar lógica a los objetos (ángeles, demonios). Movimiento pasivo atado al loop de animación y reacción al touch/click (si corresponde).
**US implementadas**: US-003
**Depende de**: `us-002-escenarios`
**Justificación**: Primero el fondo se debe mover bien, luego le damos vida a los detalles.
**Riesgos / preguntas abiertas**: El hit-box (zona táctil) de los PNGs con transparencia a veces es molesto en mobile, hay que manejarlo bien con CSS.

### `us-004-optimizacion`
**Funcionalidad**: Crear un script o componente que obligue al navegador a precargar las imágenes principales antes de soltar la pantalla de carga para evitar destellos blancos.
**US implementadas**: US-004
**Depende de**: `us-003-interacciones`
**Justificación**: Tarea de pulido. Se hace al final cuando ya tenemos todos los assets definidos en el código.
**Riesgos / preguntas abiertas**: ¿Una pantalla de carga (spinner) perjudica la experiencia?
