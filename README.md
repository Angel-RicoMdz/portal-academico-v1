# Portal académico personal

Sitio estático, sin servidor, preparado para GitHub Pages. Código completo HTML + CSS + JavaScript. Funciona también descargando el ZIP y abriendo `index.html` (el visor de PDF puede depender del navegador; con servidor web/GitHub Pages funciona mejor).

## Empezar

1. Abre `index.html` en el navegador.
2. Modifica las asignaturas y sus temas en `js/contenidos.js`, dentro de `courses`.
3. Pon tus PDF Beamer, archivos Python, guías y prácticas en `materiales/` (puedes crear subcarpetas).
4. Añade objetos a `resources` en `js/contenidos.js`. Ejemplo:

```javascript
{
  id: 'ia-clase-02',
  course: 'inteligencia-artificial',
  title: 'Clase 02 — Agentes inteligentes',
  topic: 'Unidad 1',
  type: 'presentacion',
  url: 'materiales/ia/clase-02.pdf',
  date: '2026-10-22',
  demo: false
}
```

Tipos válidos: `presentacion`, `practica`, `codigo`, `lectura`, `video`. Para video puedes poner una dirección HTTPS; se abre en una pestaña nueva. Evita enlaces de edición privados que no funcionen para estudiantes.

**Importante**: Las seis asignaturas y los temarios son una estructura inicial orientativa; ajústalos a los programas analíticos vigentes. Los archivos etiquetados `DEMOSTRACIÓN` no constituyen clases reales.

## Publicar con GitHub Pages

1. En GitHub crea un repositorio público, por ejemplo `portal-academico`.
2. Sube todo el contenido de esta carpeta a la **raíz** del repositorio; `index.html` debe quedar en la raíz.
3. En **Settings → Pages → Build and deployment → Source** selecciona **Deploy from a branch**.
4. Selecciona `main` y `/(root)` y pulsa **Save**.
5. Consulta la URL `https://TU-USUARIO.github.io/portal-academico/` cuando el despliegue finalice.

En un repositorio público, todo contenido será público. No subas calificaciones, matrículas, datos de alumnos, respuestas privadas o documentos con derechos de publicación restringidos. GitHub Pages no es un LMS con autenticación de estudiantes o recepción segura de tareas.

## Personalización

- **Nombre y enlaces del portal:** `index.html`.
- **Color, tipografía y diseño responsive:** `css/estilos.css`.
- **Asignaturas, temas y materiales:** `js/contenidos.js`.
- **Buscador, filtros, visor y modo oscuro:** `js/app.js`.
- **No necesitas Node.js ni una compilación:** solo un navegador moderno.
- El portal usa fuentes web de Google Fonts como mejora progresiva; sin internet utiliza las fuentes del sistema.

## Prueba local (opcional)

Desde la carpeta del proyecto ejecuta `python -m http.server 8000` y abre `http://localhost:8000`.

## Seguridad y límites

Se publica contenido estático, sin base de datos ni cuentas de usuario. El visor integrado solo está diseñado para PDF y depende de la compatibilidad del navegador. Recursos externos (por ejemplo videos) se abren en pestañas nuevas. Si deseas inicio de sesión, subir archivos desde un panel o calificaciones, necesitarás una solución adicional con backend o un LMS.
