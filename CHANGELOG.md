# Registro de cambios

Todos los cambios notables de este proyecto se documentan en este archivo.
El formato sigue las recomendaciones de [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2026-11-24

### Añadido
- Estructura inicial del proyecto con `package.json`, `package-lock.json`, `.gitignore` y `README.md`.
- Módulo `src/precios.js` con las funciones `calcularIVA`, `precioFinal` y `aplicarDescuento`.
- Documentación técnica mediante comentarios JSDoc y generación del sitio en `docs/api`.

### Corregido
- Validación en `precioFinal` para lanzar un `RangeError` si la base imponible es negativa.
- Resolución de conflicto en el tipo de IVA por defecto manteniendo el 21 %.
