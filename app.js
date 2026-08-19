/*
  app.js — lógica de renderizado. NO necesitas editar este archivo para
  actualizar contenido: todo el texto sale de contenido.js.
*/

(function () {
  const C = window.CONTENIDO || {};
  let grupoActivo = "necesito";
  let filtroTexto = "";

  // ---- Encabezado -------------------------------------------------------
  document.title = C.titulo || document.title;
  setText("titulo-principal", C.titulo);
  setText("descripcion-larga", C.descripcionLarga || C.descripcionCorta);
  setText("fecha-corte", C.fechaCorte);
  setText("etiqueta-fundacion", C.fundacion?.eslogan);
  const logoEl = document.getElementById("logo-fundacion");
  if (logoEl && C.fundacion?.logo) {
    logoEl.src = C.fundacion.logo;
    logoEl.hidden = false;
  }
  setAttr("meta-description", "content", C.descripcionCorta);
  setAttr("meta-og-title", "content", C.titulo);
  setAttr("meta-og-description", "content", C.descripcionCorta);

  const buscador = document.getElementById("buscador");
  if (buscador && C.textoBuscador) buscador.placeholder = C.textoBuscador;

  // ---- Aviso de estafas / fuentes / formulario / sobre página -----------
  setText("texto-aviso-estafas", C.avisoEstafas);
  if (Array.isArray(C.fuentes)) setText("texto-fuentes", C.fuentes.join(" · "));
  setText("texto-ayuda-formulario", C.formulario?.textoAyuda);
  setText("texto-sobre-pagina", C.textoSobrePagina);
  setText("texto-privacidad", C.textoPrivacidad);
  setText("texto-derechos-autor", C.textoDerechosAutor);
  setText("texto-responsables", C.fundacion?.responsables);

  const linkContacto = document.getElementById("link-contacto");
  if (linkContacto && C.fundacion?.correoContacto) {
    linkContacto.href = "mailto:" + C.fundacion.correoContacto;
    linkContacto.textContent = C.fundacion.correoContacto;
  }
  setText(
    "pie-fundacion",
    `© ${new Date().getFullYear()} ${C.fundacion?.nombre || ""} · Página informativa, no oficial.`
  );

  // ---- Tarjetas de modo (Necesito ayuda / Quiero ayudar) -----------------
  const modoNecesito = document.getElementById("modo-necesito");
  const modoAyudar = document.getElementById("modo-ayudar");
  [modoNecesito, modoAyudar].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
      grupoActivo = btn.dataset.grupo;
      modoNecesito.classList.toggle("activa", grupoActivo === "necesito");
      modoAyudar.classList.toggle("activa", grupoActivo === "ayudar");
      renderGrid();
    });
  });

  // ---- Buscador -----------------------------------------------------
  if (buscador) {
    buscador.addEventListener("input", () => {
      filtroTexto = normalizar(buscador.value.trim());
      // Si el usuario busca mientras está viendo el detalle de una
      // categoría, lo regresamos a la cuadrícula para ver resultados.
      if (window.location.hash) window.location.hash = "";
      renderGrid();
    });
  }

  function normalizar(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  // ---- Grid de categorías --------------------------------------------
  const grid = document.getElementById("grid-categorias");
  const sinResultados = document.getElementById("sin-resultados");

  function textoBusquedaCategoria(s) {
    const partes = [s.titulo, s.subtitulo];
    (s.items || []).forEach((it) => {
      partes.push(it.etiqueta, it.titulo, it.descripcion);
    });
    return normalizar(partes.filter(Boolean).join(" "));
  }

  function renderGrid() {
    if (!grid || !Array.isArray(C.secciones)) return;
    const items = C.secciones.filter((s) => {
      const coincideGrupo = s.grupo === "ambos" || s.grupo === grupoActivo;
      if (!coincideGrupo) return false;
      if (!filtroTexto) return true;
      return textoBusquedaCategoria(s).includes(filtroTexto);
    });

    grid.innerHTML = items
      .map(
        (s) => `
        <a class="tarjeta-categoria" href="#${escapeAttr(s.id)}">
          <span class="tarjeta-categoria-icono" style="background:${escapeAttr(s.color || "#0a6e5c")}">${escapeHtml(s.icono || "•")}</span>
          <span class="tarjeta-categoria-texto">
            <strong>${escapeHtml(s.titulo)}</strong>
            <span>${escapeHtml(s.subtitulo || "")}</span>
          </span>
          <span class="tarjeta-categoria-flecha">›</span>
        </a>`
      )
      .join("");

    if (sinResultados) sinResultados.hidden = items.length > 0;
  }

  // ---- Enrutamiento por hash (#id-de-categoria) --------------------------
  const vistaGrid = document.getElementById("vista-grid");
  const vistaDetalle = document.getElementById("vista-detalle");
  const detalleIcono = document.getElementById("detalle-icono");
  const detalleTitulo = document.getElementById("detalle-titulo");
  const detalleSubtitulo = document.getElementById("detalle-subtitulo");
  const detalleItems = document.getElementById("detalle-items");
  const detalleMeta = document.getElementById("detalle-meta");
  const btnRegresar = document.getElementById("btn-regresar");

  function accionHtml(accion) {
    const texto = escapeHtml(accion.texto || "Ver");
    if (accion.tipo === "llamar") {
      const numero = String(accion.valor || "").replace(/[^\d+]/g, "");
      return `<a class="item-accion" href="tel:${escapeAttr(numero)}">📞 ${texto}</a>`;
    }
    if (accion.tipo === "whatsapp") {
      const numero = String(accion.valor || "").replace(/[^\d+]/g, "");
      return `<a class="item-accion" href="https://wa.me/${escapeAttr(numero)}" target="_blank" rel="noopener">💬 ${texto}</a>`;
    }
    if (accion.tipo === "enlace") {
      return `<a class="item-accion" href="${escapeAttr(accion.valor || "#")}" target="_blank" rel="noopener">🔗 ${texto}</a>`;
    }
    if (accion.tipo === "copiar") {
      return `<button type="button" class="item-accion" data-copiar="${escapeAttr(accion.valor || "")}">📋 ${texto}</button>`;
    }
    return "";
  }

  function renderDetalle(seccion) {
    detalleIcono.textContent = seccion.icono || "";
    detalleIcono.style.background = seccion.color || "#0a6e5c";
    detalleTitulo.textContent = seccion.titulo || "";
    detalleSubtitulo.textContent =
      (seccion.subtitulo || "") + (Array.isArray(seccion.items) ? ` · ${seccion.items.length} ${seccion.items.length === 1 ? "opción" : "opciones"}` : "");

    detalleItems.innerHTML = (seccion.items || [])
      .map(
        (it) => `
        <div class="item-tarjeta">
          ${it.etiqueta ? `<div class="item-etiqueta">${escapeHtml(it.etiqueta)}</div>` : ""}
          <div class="item-titulo">${escapeHtml(it.titulo || "")}</div>
          ${it.descripcion ? `<div class="item-descripcion">${escapeHtml(it.descripcion)}</div>` : ""}
          <div class="item-acciones">${(it.acciones || []).map(accionHtml).join("")}</div>
        </div>`
      )
      .join("");

    detalleMeta.textContent = `Fuente: ${seccion.fuente || "—"} · Corte: ${seccion.fechaCorte || "—"}`;

    // Botones "Copiar"
    detalleItems.querySelectorAll("[data-copiar]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const valor = btn.getAttribute("data-copiar");
        try {
          await navigator.clipboard.writeText(valor);
        } catch (e) {
          /* algunos navegadores requieren interacción directa; si falla, no hacemos nada más */
        }
        const textoOriginal = btn.textContent;
        btn.textContent = "✅ Copiado";
        btn.classList.add("copiado");
        setTimeout(() => {
          btn.textContent = textoOriginal;
          btn.classList.remove("copiado");
        }, 1800);
      });
    });
  }

  function aplicarRuta() {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    const seccion = Array.isArray(C.secciones) ? C.secciones.find((s) => s.id === id) : null;

    if (seccion) {
      vistaGrid.hidden = true;
      vistaDetalle.hidden = false;
      renderDetalle(seccion);
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    } else {
      vistaGrid.hidden = false;
      vistaDetalle.hidden = true;
    }
  }

  if (btnRegresar) {
    btnRegresar.addEventListener("click", () => {
      window.location.hash = "";
    });
  }

  window.addEventListener("hashchange", aplicarRuta);

  renderGrid();
  aplicarRuta();

  // ---- Botón compartir -----------------------------------------------
  const btnCompartir = document.getElementById("btn-compartir");
  if (btnCompartir) {
    btnCompartir.addEventListener("click", async () => {
      const datos = { title: C.titulo, text: C.descripcionCorta, url: window.location.href };
      if (navigator.share) {
        try {
          await navigator.share(datos);
        } catch (e) {
          /* usuario canceló */
        }
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          btnCompartir.textContent = "Enlace copiado";
          setTimeout(() => (btnCompartir.textContent = "⬆ Compartir"), 2000);
        } catch (e) {
          alert(window.location.href);
        }
      }
    });
  }

  // ---- Contador en vivo (opcional, requiere Supabase) ---------------------
  const elEnLinea = document.getElementById("en-linea");
  const elSeparador = document.getElementById("separador-en-linea");
  if (C.supabase && C.supabase.activo && C.supabase.url && C.supabase.anonKey) {
    fetch(`${C.supabase.url}/rest/v1/rpc/${C.supabase.funcionRPC}`, {
      method: "POST",
      headers: {
        apikey: C.supabase.anonKey,
        Authorization: `Bearer ${C.supabase.anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.consultas !== "undefined" && elEnLinea) {
          elEnLinea.textContent = `${data.consultas} consultas en total`;
        }
      })
      .catch(() => {});
  } else {
    if (elEnLinea) elEnLinea.remove();
    if (elSeparador) elSeparador.remove();
  }

  // ---- Utilidades ------------------------------------------------------
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.textContent = value;
  }

  function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.setAttribute(attr, value);
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }
})();
