# Guía paso a paso — Sitio de información verificada para el Chocó

Esta guía explica cómo publicar el sitio, cómo mantenerlo actualizado y cómo dejarlo bajo el control total de la fundación, sin depender de un desarrollador para cada cambio de texto.

Los archivos del sitio están en la carpeta `sitio-choco/`:

- `index.html` — estructura de la página (no se edita para cambios de texto).
- `styles.css` — colores y diseño.
- `contenido.js` — **el único archivo que la fundación debe editar** para actualizar textos, teléfonos, secciones y datos de contacto.
- `app.js` — lógica que toma lo escrito en `contenido.js` y lo muestra en pantalla.
- `gracias.html` — página que se muestra tras enviar una sugerencia.

---

## Paso 1 — Crear las cuentas necesarias

Todas son gratuitas para este uso.

1. **GitHub** (github.com) — aquí vive el código del sitio y el historial de cambios. Créala con el correo institucional de la fundación, no el de una persona particular, para que la cuenta no dependa de alguien que después se retire del equipo.
2. **Netlify** (netlify.com) — aquí se publica el sitio. Puedes crear la cuenta con el mismo correo institucional o iniciar sesión directamente con la cuenta de GitHub del paso anterior.
3. *(Opcional)* **Supabase** (supabase.com) — solo si quieren el contador de visitas en vivo. Se explica en el Paso 6.

**Recomendación de gobernanza:** crea estas cuentas con un correo de la fundación (ej. `web@fundacion.org`), no el correo personal de quien esté haciendo hoy el trabajo técnico. Así "el dominio de la información" queda en la fundación y no en una persona.

---

## Paso 2 — Subir el código a GitHub

1. Entra a GitHub y crea un repositorio nuevo (botón "New repository"). Nómbralo, por ejemplo, `informacion-choco`. Puede ser público o privado (público es lo normal para este tipo de páginas).
2. Sube los 5 archivos de la carpeta `sitio-choco/` a ese repositorio. La forma más simple sin usar la terminal:
   - En la página del repositorio recién creado, haz clic en "uploading an existing file".
   - Arrastra los archivos `index.html`, `styles.css`, `contenido.js`, `app.js` y `gracias.html`.
   - Escribe un mensaje como "Primera versión del sitio" y confirma ("Commit changes").

---

## Paso 3 — Publicar en Netlify

1. En Netlify, haz clic en "Add new site" → "Import an existing project".
2. Conecta tu cuenta de GitHub y selecciona el repositorio `informacion-choco`.
3. En la configuración de build, deja:
   - **Build command:** (vacío, no lleva nada)
   - **Publish directory:** `.` (un solo punto, significa "la raíz del repositorio")
4. Haz clic en "Deploy site". En un minuto el sitio queda publicado en una dirección tipo `nombre-aleatorio.netlify.app`.
5. Cambia ese nombre por algo memorable en **Site settings → Change site name**, por ejemplo `informacion-choco.netlify.app`.

Desde este momento, **cada vez que se suba un cambio a GitHub, Netlify vuelve a publicar el sitio automáticamente** en 1–2 minutos. No hay que hacer nada manual adicional.

---

## Paso 4 — Conectar el dominio propio de la fundación (opcional pero recomendado)

Si la fundación ya tiene un dominio (ej. `fundacionxyz.org`) o quiere comprar uno nuevo:

1. En Netlify: **Site settings → Domain management → Add a domain**.
2. Escribe el dominio (ej. `informacion.fundacionxyz.org` o `fundacionxyz.org`).
3. Netlify te da unos registros DNS (tipo `CNAME` o `A`) que debes agregar donde esté administrado el dominio (GoDaddy, Namecheap, el proveedor local, etc.). Si no saben quién administra el dominio, es el mismo lugar donde se compró.
4. Netlify emite automáticamente el certificado de seguridad (HTTPS) sin costo, unas horas después de conectar el DNS.

Si aún no tienen dominio propio, el sitio funciona perfectamente con la dirección gratuita `algo.netlify.app` mientras tanto.

---

## Paso 5 — Cómo editar el contenido (lo que va a usar el equipo de la fundación)

**Todo el texto del sitio vive en un solo archivo: `contenido.js`.** Está escrito en español con comentarios que explican cada parte. No es necesario saber programar, solo seguir el formato.

### Para editar sin instalar nada (recomendado para el equipo de comunicaciones):

1. Entra al repositorio en GitHub.com y abre el archivo `contenido.js`.
2. Haz clic en el ícono de lápiz (editar) arriba a la derecha.
3. Cambia el texto que necesites, por ejemplo:
   ```js
   { nombre: "Bomberos", numero: "119" },
   ```
   por
   ```js
   { nombre: "Bomberos Quibdó", numero: "3200000000" },
   ```
4. Baja al final de la página y haz clic en "Commit changes" (puedes escribir una nota como "Actualizo teléfono de bomberos").
5. Netlify publica el cambio automáticamente en 1–2 minutos. No hay que hacer nada más.

### Reglas para no romper el archivo al editar

- Cada línea de texto va entre comillas `"..."`.
- Cada elemento de una lista (líneas de emergencia, secciones, fuentes) termina en coma `,`, **excepto el último de la lista**.
- No borres llaves `{ }` ni corchetes `[ ]`.
- Si tienes dudas, edita solo el texto entre comillas y deja toda la puntuación (comas, llaves, corchetes) exactamente igual.
- Después de guardar, entra al sitio publicado y revisa que se vea bien. Si algo se rompió, en GitHub puedes ver el historial de versiones ("History") y volver a la versión anterior con un clic.

### Qué se puede editar en `contenido.js`

| Sección del archivo | Qué controla |
|---|---|
| `fundacion` | Nombre, eslogan, correo, teléfono y responsable que aparecen en el sitio |
| `titulo` / `descripcionCorta` / `fechaCorte` | Encabezado de la página |
| `lineasEmergencia` | Los botones de llamada rápida |
| `secciones` | Los bloques desplegables (albergues, salud, donaciones, etc.) — puedes agregar o quitar secciones completas |
| `avisoEstafas` | El recuadro de advertencia sobre donaciones |
| `fuentes` | Lista de entidades citadas |
| `textoSobrePagina` / `textoPrivacidad` / `textoDerechosAutor` | Textos legales al final |
| `supabase` | Activar/desactivar el contador en vivo (Paso 6) |

---

## Paso 6 — Contador de visitas en vivo (opcional)

Esto es opcional; el sitio funciona sin ello. Si lo quieren:

1. Crea un proyecto gratuito en supabase.com.
2. En el editor SQL del proyecto, crea una tabla simple de contador y una función que la incremente y devuelva el total, por ejemplo una función `pulso()` que sume 1 en cada llamado y devuelva `{ "consultas": N }`.
3. En **Project Settings → API**, copia la "Project URL" y la "anon public key".
4. En `contenido.js`, en la sección `supabase`, pega esos valores y cambia `activo: false` a `activo: true`.
5. Publica el cambio (Paso 5). El contador aparecerá junto a "Actualizado" en el encabezado.

*(Si tu equipo técnico quiere el detalle exacto de la función SQL usada en el sitio de referencia, puedo dártelo aparte; no lo incluyo aquí por defecto porque requiere ajustarlo a la base de datos de cada proyecto.)*

---

## Paso 7 — El formulario de sugerencias

Ya está configurado con **Netlify Forms**, que es gratis hasta un número generoso de envíos mensuales y no requiere programar nada más.

1. Después del primer despliegue (Paso 3), ve a Netlify → tu sitio → pestaña **Forms**. Debe aparecer un formulario llamado `sugerencias-choco` detectado automáticamente.
2. Ahí puedes ver cada sugerencia recibida.
3. En **Forms → Settings → Form notifications**, agrega una notificación por correo para que el equipo se entere de cada nuevo mensaje sin tener que entrar a Netlify a revisar.

---

## Paso 8 — Quién debe tener acceso (gobernanza)

Para que "la fundación tenga el dominio de la información" y no dependa de una sola persona:

1. En **GitHub → Settings → Collaborators**, agrega a 2–3 personas del equipo de comunicaciones/dirección como colaboradoras del repositorio (no solo a quien lo programó).
2. En **Netlify → Site settings → Members**, agrega también a esas mismas personas como miembros del equipo Netlify.
3. Define internamente quién revisa cada dato antes de publicarlo (fuente oficial + fecha de corte), igual que hace el sitio de referencia de Cali.
4. Guarda las contraseñas/accesos en un gestor institucional (no en el celular de una sola persona).

---

## Paso 9 — Buenas prácticas de contenido (recomendado seguir siempre)

- Cada dato debe indicar **fuente** y **fecha de corte** (ya está incorporado en cada sección).
- El aviso de que la página **no es un canal oficial del Estado** debe mantenerse visible.
- No pidas datos personales en el formulario de sugerencias (ya está configurado para pedir solo texto).
- Advierte siempre contra estafas: solo donar a cuentas publicadas oficialmente por cada entidad.
- Revisa y corrige errores reportados dentro de 24–48 horas, y deja constancia de cuándo se corrigió.

---

## Resumen rápido para el día a día

Una vez publicado, el 90% del trabajo futuro es: **abrir `contenido.js` en GitHub, editar el texto entre comillas, hacer clic en "Commit changes"**. Netlify hace el resto automáticamente.
