# Proyecto Vivero — AGENTS.md (legacy)

> ⚠️ **Este archivo quedó desactualizado.** El AGENTS.md canónico del proyecto vive en la **raíz del repo** (`/AGENTS.md` y su copia `/CLAUDE.md`). Todo agente debe leer ESE archivo primero.

## Estado actual (2026-08-10)

- **Stack:** Java 21 + Spring Boot 3.4 (backend) · React 19 + Vite + Tailwind v4 (frontend) · PostgreSQL 15.
- **Auth:** username + password (BCrypt) + JWT — **NO PIN**.
- **RBAC:** plano `Usuario ↔ Rol ↔ Permiso` (N:M directos) — el pivot `Usuario_Unidad_Rol` ya no existe (`us-012-flat-rbac`).
- **Multi-negocio:** `UnidadNegocio` quedó **vestigial** (sin controller, `SecurityService` dead code). Decisión pendiente: completar o abandonar.
- **Permisos reales:** `LEER_STOCK`, `ESCRIBIR_STOCK`, `ESCRIBIR_VENTAS`, `LEER_CLIENTES`, `ESCRIBIR_CLIENTES`, `LEER_INSUMOS`, `ESCRIBIR_INSUMOS`, `ADMIN_DB`.
- **Changes archivados:** `infra-001-db-viewer`, `us-000`…`us-012`, `docker-full-stack`, `ui-rbac-profile`, `ui-feedback-modals`.
- **Próximo change:** `us-013-ventas-core`.

## Referencias

- KB: [`knowledge-base/`](../knowledge-base/)
- Roadmap: [`openspec/roadmap.md`](../openspec/roadmap.md)
- Reglas duras: ver [`/AGENTS.md`](../AGENTS.md)