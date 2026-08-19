/*
  ============================================================================
  CONTENIDO.JS  —  ÚNICO ARCHIVO QUE LA FUNDACIÓN DEBE EDITAR
  ============================================================================
  Aquí vive TODO el texto del sitio. No es necesario tocar index.html,
  styles.css ni app.js para actualizar la información: basta con editar
  los valores de este archivo (lo que está entre comillas "...") y volver
  a publicar (ver GUIA-PASO-A-PASO.md).

  Las 17 categorías de aquí abajo (líneas de emergencia + las 16 tarjetas
  que definió el cliente) ya tienen el ícono, color, título y subtítulo
  EXACTOS que se pidieron. Lo único que falta es completar, dentro de
  "items", la información real: nombre de la entidad, número de teléfono,
  cuenta bancaria, dirección, etc.

  Reglas para no romper el archivo al editar:
  1. No borres las comillas ni las llaves { } [ ].
  2. Si un texto tiene comillas dobles dentro, usa comillas simples ' '.
  3. Cada elemento de una lista va separado por coma, EXCEPTO el último.

  ----------------------------------------------------------------------
  CÓMO FUNCIONA CADA CATEGORÍA (sección):
  ----------------------------------------------------------------------
  Cada categoría tiene una lista de "items" (tarjetas de contenido). Por
  ejemplo, la categoría "Donaciones en dinero" puede tener un item por
  cada banco o ciudad. Cada item tiene:

    etiqueta:    texto corto en mayúsculas arriba del título
                 (ej: "QUIBDÓ · BANCO DE BOGOTÁ")
    titulo:      título del item (ej: "Cuenta corriente")
    descripcion: una o dos frases de explicación
    acciones:    uno o más botones. Cada acción es:
                 { tipo: "llamar",   texto: "Llamar 123",       valor: "123" }
                 { tipo: "copiar",   texto: "Copiar número",    valor: "578446940" }
                 { tipo: "whatsapp", texto: "Escribir por WhatsApp", valor: "573053092989" }
                 { tipo: "enlace",   texto: "Ver más",          valor: "https://..." }

  Para agregar un item nuevo, copia un bloque { etiqueta: ... } completo
  (incluidas las llaves { }) y pégalo antes del corchete ] que cierra la
  lista de items, separándolo con una coma del anterior.
  ============================================================================
*/

window.CONTENIDO = {

  // --------------------------------------------------------------------
  // 1. DATOS DE LA FUNDACIÓN
  // --------------------------------------------------------------------
  fundacion: {
    nombre: "Fundación Miguel Alejandro",
    eslogan: "Iniciativa de la Fundación Miguel Alejandro para el municipio ZYX",
    correoContacto: "[correo@fundacion.org]",
    telefonoContacto: "[+57 000 000 0000]",
    sitioWeb: "[https://www.fundacion.org]",
    responsables: "[Nombre y apellido del/de la responsable]",
    // Nombre del archivo del logo (debe estar subido en la misma carpeta
    // que index.html, ej: "logo.png"). Déjalo como "" para no mostrar logo.
    logo: "logo.png",
  },

  // --------------------------------------------------------------------
  // 2. ENCABEZADO  (título y descripción tal como los definió el cliente)
  // --------------------------------------------------------------------
  titulo: "Información verificada sobre el terremoto · ZYX",
  descripcionCorta:
    "Información verificada sobre el terremoto en Chocó: dónde pedir ayuda, dónde donar y a quién llamar, con la fuente de cada dato.",
  descripcionLarga:
    "Aquí encontrarás información útil verificada de distintas fuentes y organizaciones públicas y privadas para recibir y dar apoyo tras el terremoto del 10 de agosto de 2026; dónde pedir ayuda, dónde donar y a quién contactar, etc. Solo debes dar clic en la sección que necesites.",
  fechaCorte: "16 de agosto de 2026",
  textoBuscador: "Buscar ayuda, donación o teléfono...",

  // --------------------------------------------------------------------
  // 3. CATEGORÍAS  (la cuadrícula "ELIGE LO QUE NECESITAS")
  //    Orden, ícono, color, título y subtítulo definidos por el cliente.
  //    "id" se usa en el enlace de la página (ej: sitio.com/#dinero).
  // --------------------------------------------------------------------
  secciones: [
    {
      id: "emergencias",
      icono: "🚨",
      color: "#c9161d",
      titulo: "Líneas de emergencia",
      subtitulo: "A quién llamar ahora mismo",
      grupo: "ambos",
      fuente: "[Nombre de la entidad]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "CHOCÓ",
          titulo: "Línea única de emergencias",
          descripcion: "Si no sabes a quién llamar, llama al 123. Desde ahí despachan ambulancia, policía o bomberos.",
          acciones: [{ tipo: "llamar", texto: "Línea 123", valor: "123" }],
        },
        {
          etiqueta: "BOMBEROS",
          titulo: "Bomberos",
          descripcion: "Incendios, rescates y atención de emergencias estructurales.",
          acciones: [{ tipo: "llamar", texto: "Llamar 119", valor: "119" }],
        },
        {
          etiqueta: "CRUZ ROJA",
          titulo: "Cruz Roja Colombiana",
          descripcion: "Atención humanitaria y primeros auxilios.",
          acciones: [{ tipo: "llamar", texto: "Llamar 132", valor: "132" }],
        },
      ],
    },
    {
      id: "censo",
      icono: "📋",
      color: "#13457f",
      titulo: "Censo de damnificados · RUFE",
      subtitulo: "El registro oficial y cómo evitar estafas",
      grupo: "necesito",
      fuente: "[Entidad responsable del censo]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD RESPONSABLE]",
          titulo: "[Nombre del registro oficial]",
          descripcion: "[Cómo y dónde registrarse como persona afectada, qué documentos se necesitan, y advertencia sobre registros falsos.]",
          acciones: [{ tipo: "enlace", texto: "Ver formulario oficial", valor: "https://..." }],
        },
      ],
    },
    {
      id: "vivienda",
      icono: "🏚️",
      color: "#414b5c",
      titulo: "Daños en tu vivienda",
      subtitulo: "Reportar grietas y pedir revisión",
      grupo: "necesito",
      fuente: "[Nombre de la entidad]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD]",
          titulo: "Reportar grietas o daños estructurales",
          descripcion: "[Cómo solicitar una visita técnica de revisión.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "ninez",
      icono: "👶",
      color: "#c03a63",
      titulo: "Niños, niñas y adolescentes",
      subtitulo: "Línea 141, guía emocional y una carta",
      grupo: "necesito",
      fuente: "ICBF",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "ICBF",
          titulo: "Línea de niñez y adolescencia",
          descripcion: "Reporta si un menor quedó separado de su familia o necesita apoyo emocional.",
          acciones: [{ tipo: "llamar", texto: "Llamar 141", valor: "141" }],
        },
      ],
    },
    {
      id: "salud",
      icono: "❤️",
      color: "#1668dc",
      titulo: "Salud física y mental",
      subtitulo: "Líneas de atención psicológica",
      grupo: "ambos",
      fuente: "[Secretaría de Salud del Chocó]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "LÍNEA DE SALUD MENTAL",
          titulo: "Apoyo psicológico gratuito",
          descripcion: "Atención emocional gratuita, disponible las 24 horas.",
          acciones: [{ tipo: "llamar", texto: "Llamar 106", valor: "106" }],
        },
      ],
    },
    {
      id: "juridica",
      icono: "⚖️",
      color: "#7c1fa8",
      titulo: "Orientación jurídica gratuita",
      subtitulo: "Abogados y universidades que acompañan",
      grupo: "necesito",
      fuente: "[Facultad de Derecho / entidad]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[UNIVERSIDAD O ENTIDAD]",
          titulo: "Consultorio jurídico gratuito",
          descripcion: "[Asesoría legal gratuita para trámites relacionados con la emergencia.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "albergues",
      icono: "🏠",
      color: "#b45a00",
      titulo: "Albergues temporales",
      subtitulo: "Dónde dormir si perdiste tu casa",
      grupo: "necesito",
      fuente: "[Alcaldía / Gestión del Riesgo]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[NOMBRE DEL ALBERGUE]",
          titulo: "[Dirección del albergue]",
          descripcion: "[Capacidad, horarios de ingreso y qué llevar.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "acopio",
      icono: "📦",
      color: "#1668dc",
      titulo: "Puntos de acopio",
      subtitulo: "Dónde llevar donaciones en especie",
      grupo: "ayudar",
      fuente: "[Nombre de la entidad]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[NOMBRE DEL PUNTO]",
          titulo: "[Dirección]",
          descripcion: "[Horarios y qué tipo de donaciones reciben.]",
          acciones: [{ tipo: "enlace", texto: "Ver ubicación", valor: "https://..." }],
        },
      ],
    },
    {
      id: "alojamiento",
      icono: "🛏️",
      color: "#b45a00",
      titulo: "Alojamiento solidario",
      subtitulo: "Ofrecer o pedir un techo por unos días",
      grupo: "ayudar",
      fuente: "[Nombre de la entidad]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD / GRUPO COMUNITARIO]",
          titulo: "[Cómo ofrecer o pedir alojamiento]",
          descripcion: "[Explica el proceso de coordinación.]",
          acciones: [{ tipo: "whatsapp", texto: "Escribir por WhatsApp", valor: "573000000000" }],
        },
      ],
    },
    {
      id: "dinero",
      icono: "🏦",
      color: "#318b55",
      titulo: "Donaciones en dinero",
      subtitulo: "Cuentas y llaves oficiales",
      grupo: "ayudar",
      fuente: "[Nombre de la fundación / entidad bancaria]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[FUNDACIÓN] · [BANCO] · CUENTA [TIPO]",
          titulo: "Cuenta oficial de donaciones",
          descripcion: "[Aclara que esta es la única cuenta oficial y advierte sobre estafas.]",
          acciones: [{ tipo: "copiar", texto: "Copiar número de cuenta", valor: "[0000000000]" }],
        },
        {
          etiqueta: "LLAVE BRE-B",
          titulo: "Donación por llave BRE-B",
          descripcion: "[Si tienen una llave de pago BRE-B publicada.]",
          acciones: [{ tipo: "copiar", texto: "Copiar llave", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "negocios",
      icono: "💼",
      color: "#0e7c7b",
      titulo: "Negocios afectados",
      subtitulo: "Si el sismo golpeó tu empresa",
      grupo: "necesito",
      fuente: "[Cámara de Comercio del Chocó]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[CÁMARA DE COMERCIO]",
          titulo: "[Ayudas o alivios para negocios afectados]",
          descripcion: "[Líneas de crédito blando, alivios tributarios, acompañamiento.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "familiar",
      icono: "📄",
      color: "#0b5c46",
      titulo: "Perdiste a un familiar",
      subtitulo: "Indemnización gratuita del Estado",
      grupo: "necesito",
      fuente: "[Alcaldía / UNGRD]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD]",
          titulo: "[Auxilio funerario / indemnización]",
          descripcion: "[Cómo solicitar el auxilio funerario o la indemnización gratuita del Estado.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "animales",
      icono: "🐾",
      color: "#7d20a8",
      titulo: "Protección animal",
      subtitulo: "Ayuda para perros y gatos",
      grupo: "necesito",
      fuente: "[Entidad de bienestar animal]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD]",
          titulo: "[Atención veterinaria de emergencia]",
          descripcion: "[Cómo reportar animales heridos o perdidos.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "seguros",
      icono: "🛡️",
      color: "#4b5563",
      titulo: "Seguros de casa y carro",
      subtitulo: "Teléfonos de todas las aseguradoras",
      grupo: "necesito",
      fuente: "[Fasecolda]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ASEGURADORA]",
          titulo: "[Línea de siniestros]",
          descripcion: "[Cómo reportar un siniestro por daños del terremoto.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "arbol",
      icono: "🌳",
      color: "#0b5c46",
      titulo: "Árbol caído o en riesgo",
      subtitulo: "A quién reportar y en qué orden",
      grupo: "necesito",
      fuente: "[Entidad ambiental del Chocó]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[ENTIDAD AMBIENTAL]",
          titulo: "[Reportar árbol caído o en riesgo]",
          descripcion: "[A quién llamar primero y qué información tener lista.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
    {
      id: "escombros",
      icono: "🚚",
      color: "#0b5c46",
      titulo: "Dónde botar escombros",
      subtitulo: "Puntos autorizados de disposición",
      grupo: "necesito",
      fuente: "[Alcaldía / empresa de aseo]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[PUNTO AUTORIZADO]",
          titulo: "[Dirección del punto]",
          descripcion: "[Horarios y qué tipo de escombros se reciben.]",
          acciones: [{ tipo: "enlace", texto: "Ver ubicación", valor: "https://..." }],
        },
      ],
    },
    {
      id: "ferreterias",
      icono: "🔧",
      color: "#8a6100",
      titulo: "Ferreterías abiertas",
      subtitulo: "Cascos, guantes y herramienta",
      grupo: "necesito",
      fuente: "[Cámara de Comercio del Chocó]",
      fechaCorte: "[dd/mm/aaaa]",
      items: [
        {
          etiqueta: "[NOMBRE DE LA FERRETERÍA]",
          titulo: "[Dirección]",
          descripcion: "[Horarios de atención.]",
          acciones: [{ tipo: "llamar", texto: "[Teléfono]", valor: "[0000000000]" }],
        },
      ],
    },
  ],

  // --------------------------------------------------------------------
  // 4. AVISO SOBRE ESTAFAS
  // --------------------------------------------------------------------
  avisoEstafas:
    "Dona únicamente a las cuentas y canales que las entidades publiquen oficialmente. Ningún trámite ante el Estado tiene costo ni requiere intermediarios.",

  // --------------------------------------------------------------------
  // 5. FUENTES CITADAS (lista simple de nombres de entidades/medios)
  // --------------------------------------------------------------------
  fuentes: [
    "[Gobernación del Chocó]",
    "[Alcaldía de Quibdó]",
    "[Cruz Roja Colombiana Seccional Chocó]",
    "[UNGRD]",
    "[Defensa Civil Colombiana]",
    "[Agrega aquí cada entidad que citas]",
  ],

  // --------------------------------------------------------------------
  // 6. TEXTOS LEGALES / SOBRE LA PÁGINA
  // --------------------------------------------------------------------
  textoSobrePagina:
    "Página ciudadana impulsada por [Nombre de la Fundación]. No es un canal oficial del Estado ni está administrada por ninguna entidad pública. Reúne y verifica información publicada por entidades oficiales y organizaciones privadas.",
  textoPrivacidad:
    "Esta página no pide datos personales. No hay registro ni formularios que soliciten tu nombre, correo o ubicación, salvo el buzón de sugerencias, que solo envía el texto que escribas.",
  textoDerechosAutor:
    "Los textos de actos administrativos, comunicados y normas se reproducen o resumen a partir de sus ediciones oficiales. Las menciones a entidades públicas y privadas se hacen con fines exclusivamente informativos; no implican vínculo, patrocinio ni aval de ninguna de ellas.",

  // --------------------------------------------------------------------
  // 7. CONTADOR DE VISITAS EN VIVO (OPCIONAL)
  // --------------------------------------------------------------------
  supabase: {
    activo: false,
    url: "",
    anonKey: "",
    funcionRPC: "pulso",
  },

  // --------------------------------------------------------------------
  // 8. FORMULARIO DE SUGERENCIAS
  // --------------------------------------------------------------------
  formulario: {
    nombreFormulario: "sugerencias-choco",
    textoAyuda:
      "Solo viaja el texto que escribas. No se guarda tu nombre, tu correo ni tu ubicación.",
  },
};
