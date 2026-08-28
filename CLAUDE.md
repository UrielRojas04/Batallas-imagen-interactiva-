# Batallas de la Ilustración — Instrucciones para Agentes

> Este archivo (y su copia `CLAUDE.md`) es lo PRIMERO que todo agente lee al entrar al repo.
> Proyecto: imagen interactiva mobile-first publicada en GitHub Pages. Solo frontend, sin backend ni base de datos.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Frontend | React 19 + Vite 8 + **JavaScript (JSX)** — sin TypeScript |
| Estilos | CSS plano / CSS Modules (sin Tailwind por ahora) |
| Lint | Oxlint (`npm run lint`) |
| Despliegue | GitHub Pages (`npm run build` → carpeta `dist`) |
| Metodología | Spec-Driven Development (OPSX / OpenSpec) |

- **No** hay backend, API ni base de datos. Todo es estático y corre en el navegador.
- Recursos gráficos en `img/`. Scripts: `dev`, `build`, `lint`, `preview`.

---

## Arquitectura y Convenciones Frontend

- **Mobile-first**: la experiencia está pensada para pantallas táctiles de celular.
- **Estructura de Directorios (`src/`)**: 
  - `src/components/`: Para todos los componentes React.
  - `src/hooks/`: Lógica reutilizable, incluyendo el tracking del scroll.
  - `src/utils/`: Funciones auxiliares genéricas.
- **Motor de Parallax y Animaciones**: El scroll y efecto parallax deben implementarse usando **Vanilla JS (`requestAnimationFrame`) y CSS Variables** calculadas y aplicadas a los componentes de React. Evitar el uso de librerías pesadas (como Framer Motion) a menos que sea estrictamente necesario.
- **Gestión de Estado (State Management)**: Usar **React Context** para manejar el estado global (como el escenario activo o la posición de scroll) para evitar el "prop drilling". No instalar Zustand ni Redux.
- **Optimización de Assets**: Precargar las imágenes principales (como el `escenario normal`) para evitar pantallas en blanco en móviles. Configurar adecuadamente la carga.
- **Configuración de Despliegue (GitHub Pages)**: Asegurar siempre que `vite.config.js` tenga configurada la propiedad `base: '/<nombre-del-repo>/'` para que las rutas de los assets (`img/`) funcionen correctamente en producción.
- **Nomenclatura**: Nombres de componentes y archivos en **PascalCase** (`Scenario.jsx`). Funciones/constantes en `camelCase`.
- **Sin TypeScript**: JSX puro; no agregar capas de tipado.

---

## Concepto del Producto

Imagen interactiva para celulares: una "batalla" en varios **escenarios** superpuestos con **objetos**.

- **Escenarios (capas de fondo):** cambian con **scroll horizontal** que **sigue progresivamente al dedo** (efecto parallax, sin saltos bruscos).
- **Objetos (capas frontales):** superpuestos por escenario; se mueven levemente adelante/atrás (efecto de movimiento lento) y/o reaccionan al ser **tocados**.
- **`principal` (objeto fijo):** el único objeto presente en **todos** los escenarios; **no se mueve con el scroll** (permanece fijo sobre el viewport).
- **`nubes`:** se mueven ligeramente (efecto ambiente).

### Escenarios y objetos actuales (en `img/`)

| Escenario (fondo) | Objetos |
|-------------------|---------|
| `escenario normal.jpg` | `principal.jpg` (fijo global) · `nubes.jpg` (movimiento leve) |
| `escenario espiritual.png` | `principal.jpg` (fijo global) · `angel 1.png` · `angel 2.png` · `demonio 1.png` · `demonio 2.png` (movimiento / interacción) |

> ⚠️ **Nota de nomenclatura:** los recursos del escenario normal son **`.jpg`**, no `.png`.

---

## Convocatoria de subagentes

Trabajá en el repo usando **subagentes** cuando la tarea infla el contexto (exploración multi-archivo, implementación, tests, build). El agente principal orquesta/decide; ejecuta mediante la herramienta de tareas (Agent). Excepciones: preguntas de clarificación y comandos de estado (`git status/diff/log`, `openspec list/status`).

---

## Base de Conocimiento

No existe `knowledge-base/` ni `CHANGES.md` todavía. El dominio y el plan se definen con **OPSX**:

- `openspec/changes/` → cambios activos (proposal, design, tasks, specs).
- `openspec/specs/` → specs canónicas (fuente de verdad).
- Usar el CLI: `openspec list --json`, `openspec status --change <name> --json`.

**Antes de implementar cualquier feature nueva**, verificar si existe un change activo.

---

## Skills Disponibles

| Contexto | Skill |
|----------|-------|
| UI, componentes React, estilos, look & feel | `frontend-design` |
| Flujo OPSX (explore / propose / apply / archive) | `openspec-*` |
| Crear/mejorar skills | `skill-creator` |

Cargá la skill correspondiente al contexto ANTES de escribir código.

---

## Roadmap de Changes

> **Pendiente.** Se construye con `roadmap-generator` (genera `CHANGES.md`) cuando haya cambios definidos en OPSX.

---

## Reglas Duras (no negociables)

Estas reglas son **contrato**. Romperlas es un defecto, no una decisión de estilo.

1. **No buildear automático.** Nunca ejecutar build/compile/bundle sin pedido explícito del usuario.
2. **No commitear sin pedido explícito.** `git add`/`commit`/`push` SOLO cuando el usuario lo pide. Si estás en la rama default, ramificá antes.
3. **Conventional Commits sin `Co-Authored-By`.** Formato `tipo(scope): mensaje` (feat, fix, chore, refactor, test, docs). JAMÁS agregar atribución a IA ni `Co-Authored-By`.
4. **PascalCase en componentes React.** Nombre del componente y del archivo.
5. **JSX puro, sin TypeScript** salvo pedido explícito.
6. **Parallax progresivo, sin snaps bruscos.** El cambio de escenario sigue al dedo de forma suave.
7. **`principal` siempre fijo** sobre el viewport, presente en todos los escenarios.
8. **CERO TESTING.** No generar tests unitarios ni de integración. Es un proyecto chico y puramente visual; no perder tiempo en Vitest, Jest o Testing Library.

---

## Flujo de Trabajo

```
1. Verificar changes activos (openspec list/status)   → conocer el estado
2. /opsx:propose <change>                              → proposal + design + specs + tasks
3. Implementar las tasks (cargando skills)             → respetando las reglas duras
4. /opsx:archive <change>                              → sincronizar specs + cerrar
5. Verificar despliegue GitHub Pages (npm run build)   → solo si el usuario lo pide
```

Aplicar TODAS las reglas duras en cada paso. Ante conflicto entre un documento y este archivo, las reglas duras prevalecen.
