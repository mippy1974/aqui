/* aquí · demo app
   No framework, no build step. Hash-based routing so it works on GitHub Pages
   and when opened straight from a folder.

   Data lives in the four *.js data files next to this one (see README for the shape). The search logic below is
   the same logic a backend would run in V2; it is only here in the browser so
   the demo can run with zero infrastructure. */
(function () {
  "use strict";

  const D = window.AQUI;

  /* ------------------------------------------------------------------ */
  /* Interface text in both languages                                     */
  /* ------------------------------------------------------------------ */
  const T = {
    en: {
      tagline: "made in panama, for panama",
      hero: "discover what panama makes",
      searchPlaceholder: "Search products, brands, categories…",
      product: "product", brand: "brand", category: "category",
      noMatch: "No matching product yet. Try another word or browse by category.",
      where: "Where", radius: "Radius", allPanama: "All of Panama",
      useMyLocation: "📍 Use my location", myLocation: "My location", locating: "Locating…",
      shipsHere: "Ships to this location",
      seeWhatsHere: "See what's available here",
      shopByCategory: "shop by category", seeAll: "see all",
      curated: "curated favorites", viewAll: "view all",
      home: "home", browse: "browse", nearMe: "near me", mission: "mission",
      results: "brands", result: "brand",
      found: (n, w) => `${n} ${n === 1 ? "brand" : "brands"} ${w}`,
      inRadius: (p, r) => `within ${r} km of ${p}`,
      orShipping: (p) => `or shipping to ${p}`,
      everywhere: "across Panama",
      posAway: (km) => `${km} km away`,
      posHere: (name) => `at ${name}`,
      shipsToYou: "ships here",
      shipsNationwide: "ships nationwide",
      noResultsTitle: "Nothing within reach yet",
      noResultsBody: "No brand has a point of sale in this radius. You can widen the search or include brands that ship here.",
      widenRadius: (r) => `Widen to ${r} km`,
      includeShipping: "Include brands that ship here",
      searchAll: "Search all of Panama",
      changeSearch: "Change search",
      about: "About", products: "Our products", whereToBuy: "Where to buy", shipping: "Shipping",
      website: "Website", instagram: "Instagram", whatsapp: "WhatsApp", contact: "Contact", directions: "Map",
      shipNationwide: "Ships nationwide", shipProvinces: "Ships to", shipNone: "No shipping", shipNoneBody: "Available at points of sale only.",
      basedIn: "Based in", pointsOfSale: (n) => `${n} ${n === 1 ? "point of sale" : "points of sale"}`,
      learnMore: "Learn more about our mission →",
      allCategories: "Browse by category", allBrands: "all brands",
      demoNote: "Demo with invented brands. Data structure and search logic follow the aquí functional brief.",
      back: "Back", filtersFor: "Filters", distancesFrom: "Distances from"
    },
    es: {
      tagline: "hecho en panamá, para panamá",
      hero: "descubre lo que panamá hace",
      searchPlaceholder: "Busca productos, marcas, categorías…",
      product: "producto", brand: "marca", category: "categoría",
      noMatch: "Todavía no hay un producto con ese nombre. Prueba otra palabra o explora por categoría.",
      where: "Dónde", radius: "Radio", allPanama: "Todo Panamá",
      useMyLocation: "📍 Usar mi ubicación", myLocation: "Mi ubicación", locating: "Ubicando…",
      shipsHere: "Envía a esta ubicación",
      seeWhatsHere: "Ver qué hay disponible aquí",
      shopByCategory: "explora por categoría", seeAll: "ver todas",
      curated: "favoritos curados", viewAll: "ver todos",
      home: "inicio", browse: "explorar", nearMe: "cerca", mission: "misión",
      results: "marcas", result: "marca",
      found: (n, w) => `${n} ${n === 1 ? "marca" : "marcas"} ${w}`,
      inRadius: (p, r) => `a ${r} km de ${p}`,
      orShipping: (p) => `o con envío a ${p}`,
      everywhere: "en todo Panamá",
      posAway: (km) => `a ${km} km`,
      posHere: (name) => `en ${name}`,
      shipsToYou: "envía aquí",
      shipsNationwide: "envío nacional",
      noResultsTitle: "Nada cerca todavía",
      noResultsBody: "Ninguna marca tiene un punto de venta en este radio. Puedes ampliar la búsqueda o incluir marcas que envían aquí.",
      widenRadius: (r) => `Ampliar a ${r} km`,
      includeShipping: "Incluir marcas que envían aquí",
      searchAll: "Buscar en todo Panamá",
      changeSearch: "Cambiar búsqueda",
      about: "Acerca de", products: "Nuestros productos", whereToBuy: "Dónde comprar", shipping: "Envíos",
      website: "Sitio web", instagram: "Instagram", whatsapp: "WhatsApp", contact: "Contacto", directions: "Mapa",
      shipNationwide: "Envía a todo el país", shipProvinces: "Envía a", shipNone: "Sin envíos", shipNoneBody: "Disponible solo en puntos de venta.",
      basedIn: "Con base en", pointsOfSale: (n) => `${n} ${n === 1 ? "punto de venta" : "puntos de venta"}`,
      learnMore: "Conoce más sobre nuestra misión →",
      allCategories: "Explora por categoría", allBrands: "todas las marcas",
      demoNote: "Demo con marcas inventadas. La estructura de datos y la lógica de búsqueda siguen el brief funcional de aquí.",
      back: "Atrás", filtersFor: "Filtros", distancesFrom: "Distancias desde"
    }
  };

  /* ------------------------------------------------------------------ */
  /* State                                                                */
  /* ------------------------------------------------------------------ */
  const state = {
    lang: (function () { try { return localStorage.getItem("aqui.lang") || "en"; } catch (e) { return "en"; } })(),
    // Search criteria live here and are mirrored to the URL for results pages.
    q: { product: "", cat: "", place: "", r: 25, ship: false, lat: null, lng: null, label: "" }
  };
  const t = (k, ...args) => { const v = T[state.lang][k]; return typeof v === "function" ? v(...args) : v; };
  const L = (obj) => (obj && (obj[state.lang] || obj.en)) || "";
  const placeName = (p) => (state.lang === "es" && p.es) ? p.es : p.name;

  const byId = (arr) => Object.fromEntries(arr.map((x) => [x.id, x]));
  const PRODUCTS = byId(D.products), CATS = byId(D.categories), PLACES = byId(D.places), PROV = byId(D.provinces), BRANDS = byId(D.brands);

  /* ------------------------------------------------------------------ */
  /* Geography                                                            */
  /* ------------------------------------------------------------------ */
  function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371, toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }
  function nearestPlace(lat, lng) {
    let best = null, bd = Infinity;
    for (const p of D.places) { const d = haversineKm(lat, lng, p.lat, p.lng); if (d < bd) { bd = d; best = p; } }
    return best;
  }
  // Resolve the current search location to coordinates + province.
  function currentLocation() {
    const q = state.q;
    if (q.place && PLACES[q.place]) { const p = PLACES[q.place]; return { lat: p.lat, lng: p.lng, province: p.province, label: placeName(p) }; }
    if (q.lat != null && q.lng != null) { const n = nearestPlace(q.lat, q.lng); return { lat: q.lat, lng: q.lng, province: n.province, label: q.label || t("myLocation") }; }
    return null;
  }
  function shipsTo(brand, province) {
    const s = brand.shipping || { type: "none" };
    if (s.type === "nationwide") return true;
    if (s.type === "provinces") return s.provinces.includes(province);
    return false;
  }

  /* ------------------------------------------------------------------ */
  /* Search: the core of the brief                                        */
  /* ------------------------------------------------------------------ */
  function search(q) {
    const loc = currentLocation();
    let brands = D.brands.slice();
    if (q.product) brands = brands.filter((b) => b.products.includes(q.product));
    if (q.cat) brands = brands.filter((b) => b.categories.includes(q.cat));

    const rows = brands.map((b) => {
      let nearest = null;
      if (loc) {
        for (const pos of b.retail) {
          const d = haversineKm(loc.lat, loc.lng, pos.lat, pos.lng);
          if (!nearest || d < nearest.km) nearest = { km: d, pos };
        }
      }
      const inRadius = !!(loc && nearest && nearest.km <= q.r);
      const ships = !!(loc && q.ship && shipsTo(b, loc.province));
      return { brand: b, nearest, inRadius, ships, shipsAnyway: loc ? shipsTo(b, loc.province) : false };
    });

    // Without a location there is no location filter (pure product / category browse).
    const filtered = loc ? rows.filter((r) => r.inRadius || r.ships) : rows;
    filtered.sort((a, b) => {
      if (a.inRadius !== b.inRadius) return a.inRadius ? -1 : 1;
      if (a.inRadius && b.inRadius) return a.nearest.km - b.nearest.km;
      return a.brand.name.localeCompare(b.brand.name);
    });
    return { rows: filtered, loc, total: rows.length };
  }

  /* ------------------------------------------------------------------ */
  /* Autocomplete                                                         */
  /* ------------------------------------------------------------------ */
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function suggest(text) {
    const n = norm(text.trim());
    if (!n) return [];
    const starts = (s) => norm(s).split(/\s+/).some((w) => w.startsWith(n)) || norm(s).startsWith(n);
    const contains = (s) => norm(s).includes(n);
    const score = (s) => (starts(s) ? 0 : contains(s) ? 1 : 9);
    const out = [];
    for (const p of D.products) { const sc = Math.min(score(p.en), score(p.es)); if (sc < 9) out.push({ kind: "product", id: p.id, label: L(p), alt: (p.en !== p.es ? (state.lang === "en" ? p.es : p.en) : ""), sc }); }
    for (const c of D.categories) { const sc = Math.min(score(c.en), score(c.es)); if (sc < 9) out.push({ kind: "category", id: c.id, label: L(c), icon: c.icon, sc: sc + 0.5 }); }
    for (const b of D.brands) { const sc = score(b.name); if (sc < 9) out.push({ kind: "brand", id: b.id, label: b.name, sc: sc + 0.25 }); }
    out.sort((a, b) => a.sc - b.sc || a.label.localeCompare(b.label));
    return out.slice(0, 8);
  }

  /* ------------------------------------------------------------------ */
  /* Routing                                                              */
  /* ------------------------------------------------------------------ */
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const [path, qs] = h.split("?");
    const params = new URLSearchParams(qs || "");
    return { path: path || "", params };
  }
  function qToParams() {
    const q = state.q, p = new URLSearchParams();
    if (q.product) p.set("product", q.product);
    if (q.cat) p.set("cat", q.cat);
    if (q.place) p.set("place", q.place);
    if (q.lat != null && !q.place) { p.set("lat", q.lat.toFixed(4)); p.set("lng", q.lng.toFixed(4)); }
    p.set("r", q.r);
    if (q.ship) p.set("ship", "1");
    return p.toString();
  }
  function paramsToQ(params) {
    const q = state.q;
    q.product = params.get("product") || "";
    q.cat = params.get("cat") || "";
    q.place = params.get("place") || "";
    q.r = Number(params.get("r")) || 25;
    q.ship = params.get("ship") === "1";
    if (params.has("lat")) { q.lat = Number(params.get("lat")); q.lng = Number(params.get("lng")); } else if (q.place) { q.lat = null; q.lng = null; }
  }
  const go = (path) => { location.hash = "#/" + path; };
  const goResults = () => go("results?" + qToParams());

  /* ------------------------------------------------------------------ */
  /* Rendering helpers                                                    */
  /* ------------------------------------------------------------------ */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tile = (photo, cls) => `<div class="${cls}" style="background:${photo.bg}22;color:${photo.bg}"><span>${photo.icon}</span></div>`;

  function header(opts = {}) {
    const back = opts.back ? `<button class="back" data-back>← ${t("back")}</button>` : "";
    return `
      <div class="topbar">
        <div>${back || `<div class="logo">aquí<span class="leaf">🍃</span></div><div class="subtitle">${t("tagline")}</div>`}</div>
        <div class="lang-toggle" role="group" aria-label="Language">
          <button data-lang="en" class="${state.lang === "en" ? "on" : ""}">EN</button>
          <button data-lang="es" class="${state.lang === "es" ? "on" : ""}">ES</button>
        </div>
      </div>`;
  }

  function searchBox() {
    return `
      <div class="search">
        <span class="icon">🔍</span>
        <input id="q" type="search" autocomplete="off" placeholder="${t("searchPlaceholder")}" aria-label="${t("searchPlaceholder")}">
        <button class="clear" id="q-clear" hidden aria-label="Clear">×</button>
        <div class="suggest" id="suggest" hidden></div>
      </div>`;
  }

  function filtersBox(opts = {}) {
    const q = state.q;
    const places = D.places.map((p) => `<option value="${p.id}" ${q.place === p.id ? "selected" : ""}>${esc(placeName(p))}</option>`).join("");
    const custom = q.lat != null && !q.place ? `<option value="__geo" selected>${esc(q.label || t("myLocation"))}</option>` : "";
    return `
      <div class="filters">
        <div class="row">
          <label class="lbl" for="place">${t("where")}</label>
          <select id="place">
            <option value="">${t("allPanama")}</option>${custom}${places}
          </select>
          <button class="geo" id="geo" type="button" title="${t("useMyLocation")}" aria-label="${t("useMyLocation")}">📍</button>
        </div>
        <div class="row">
          <label class="lbl">${t("radius")}</label>
          <div class="chips">
            ${[10, 25, 50].map((r) => `<button type="button" class="chip ${q.r === r ? "on" : ""}" data-r="${r}">${r} km</button>`).join("")}
          </div>
        </div>
        <div class="row">
          <label class="switch" style="margin-left:0"><input type="checkbox" id="ship" ${q.ship ? "checked" : ""}> ${t("shipsHere")}</label>
        </div>
        ${opts.cta ? `<button class="primary" id="go">${opts.cta}</button>` : ""}
      </div>`;
  }

  function whyChips(row, loc) {
    const chips = [];
    if (loc && row.nearest && row.inRadius) chips.push(`<span>📍 ${esc(row.nearest.pos.name)} · ${t("posAway", Math.max(1, Math.round(row.nearest.km)))}</span>`);
    if (loc && row.ships) chips.push(`<span class="ship">📦 ${t("shipsToYou")}</span>`);
    if (loc && !row.ships && row.shipsAnyway && !state.q.ship) chips.push(`<span class="dim">📦 ${t("shipsToYou")}</span>`);
    if (!loc && row.brand.shipping.type === "nationwide") chips.push(`<span class="ship">📦 ${t("shipsNationwide")}</span>`);
    return chips.length ? `<div class="why">${chips.join("")}</div>` : "";
  }

  function brandCard(row, loc) {
    const b = row.brand;
    return `
      <button class="brand-card" data-brand="${b.id}">
        ${tile(b.photos[0], "ph")}
        <div class="body">
          <div class="n">${esc(b.name)}</div>
          <div class="s">${esc(L(b.tagline))}</div>
          <div class="s">${esc(b.location.label)} · ${b.categories.map((c) => esc(L(CATS[c]))).join(" · ")}</div>
          ${whyChips(row, loc)}
        </div>
      </button>`;
  }

  function tabbar(active) {
    const items = [
      ["", "🏠", t("home")], ["browse", "▦", t("browse")], ["near", "📍", t("nearMe")], ["mission", "🍃", t("mission")]
    ];
    document.getElementById("tabbar").innerHTML = items.map(([p, ic, lbl]) =>
      `<a href="#/${p}" class="${active === p ? "on" : ""}"><span class="ic">${ic}</span>${lbl}</a>`).join("");
  }

  /* ------------------------------------------------------------------ */
  /* Views                                                                */
  /* ------------------------------------------------------------------ */
  function viewHome() {
    const featured = D.brands.filter((b) => b.featured);
    return `
      ${header()}
      <div class="hero-line">${t("hero")}</div>
      ${searchBox()}
      ${filtersBox({ cta: t("seeWhatsHere") })}
      <section class="section">
        <div class="section-head"><h2>${t("shopByCategory")}</h2><a href="#/browse">${t("seeAll")}</a></div>
        <div class="cat-grid">
          ${D.categories.map((c) => `<button class="cat" data-cat="${c.id}"><span class="ic">${c.icon}</span>${esc(L(c))}</button>`).join("")}
          <button class="cat" data-cat=""><span class="ic">✦</span>${t("allBrands")}</button>
        </div>
      </section>
      <section class="section">
        <a class="mission-card" href="#/mission">
          <div><div class="t">${esc(L(D.mission.teaser))}</div><div class="l">${esc(L(D.mission.teaserLink))} →</div></div>
          <div class="leaf">🍃</div>
        </a>
      </section>
      <section class="section">
        <div class="section-head"><h2>${t("curated")}</h2><a href="#/results?r=25">${t("viewAll")}</a></div>
        <div class="hscroll">
          ${featured.map((b) => `<button class="card-sm" data-brand="${b.id}">${tile(b.photos[0], "ph")}<div class="n">${esc(b.name)}</div><div class="s">${esc(b.location.label)}</div></button>`).join("")}
        </div>
      </section>
      <p class="demo-note">${t("demoNote")}</p>`;
  }

  function viewBrowse() {
    return `
      ${header()}
      <div class="hero-line">${t("allCategories")}</div>
      ${filtersBox()}
      <div class="cat-list">
        ${D.categories.map((c) => {
          const n = D.brands.filter((b) => b.categories.includes(c.id)).length;
          return `<button class="cat big" data-cat="${c.id}"><span class="ic">${c.icon}</span><span>${esc(L(c))}<br><small style="color:var(--muted);font-weight:500">${n} ${n === 1 ? t("result") : t("results")}</small></span></button>`;
        }).join("")}
      </div>`;
  }

  function viewNear() {
    // Location discovery: no product or category selected.
    state.q.product = ""; state.q.cat = "";
    return `
      ${header()}
      <div class="hero-line">${t("nearMe")}</div>
      ${filtersBox({ cta: t("seeWhatsHere") })}
      <p class="demo-note">${state.lang === "es" ? "Elige un lugar y un radio para ver qué marcas tienen puntos de venta cerca." : "Pick a place and a radius to see which brands have points of sale nearby."}</p>`;
  }

  function viewResults() {
    const q = state.q;
    const { rows, loc } = search(q);
    const what = q.product ? L(PRODUCTS[q.product]) : q.cat ? L(CATS[q.cat]) : t("allBrands");
    let where = t("everywhere");
    if (loc) { where = t("inRadius", loc.label, q.r); if (q.ship) where += " " + t("orShipping", loc.label); }
    const pills = [
      `<span class="pill">${q.product ? "🔍 " : q.cat ? (CATS[q.cat].icon + " ") : "✦ "}${esc(what)}</span>`,
      loc ? `<span class="pill">📍 ${esc(loc.label)} · ${q.r} km</span>` : `<span class="pill">🇵🇦 ${t("allPanama")}</span>`,
      loc && q.ship ? `<span class="pill">📦 ${t("shipsHere")}</span>` : ""
    ].join("");
    let body;
    if (rows.length) {
      body = rows.map((r) => brandCard(r, loc)).join("");
    } else {
      const wider = q.r < 50 ? (q.r < 25 ? 25 : 50) : null;
      body = `
        <div class="empty-state">
          <div class="big">🌱</div>
          <h3>${t("noResultsTitle")}</h3>
          <p>${t("noResultsBody")}</p>
          ${wider ? `<button class="primary" data-widen="${wider}">${t("widenRadius", wider)}</button>` : ""}
          ${loc && !q.ship ? `<button class="primary ghost" data-include-ship>${t("includeShipping")}</button>` : ""}
          <button class="primary ghost" data-search-all>${t("searchAll")}</button>
        </div>`;
    }
    return `
      ${header({ back: true })}
      <div class="result-head">
        <h1>${esc(what)}</h1>
        <div class="meta">${t("found", rows.length, where)}</div>
      </div>
      <div class="pillbar">${pills}<button class="pill edit" id="edit-filters">${t("changeSearch")}</button></div>
      <div id="filters-slot" hidden>${filtersBox({ cta: t("seeWhatsHere") })}</div>
      ${body}`;
  }

  function viewBrand(id) {
    const b = BRANDS[id];
    if (!b) return `${header({ back: true })}<p>Not found.</p>`;
    const loc = currentLocation();
    const s = b.shipping;
    const shipHtml = s.type === "nationwide"
      ? `<span class="badge">${t("shipNationwide")}</span><div>${esc(L({ en: "Delivery available anywhere in Panama.", es: "Entrega disponible en todo Panamá." }))}</div>`
      : s.type === "provinces"
        ? `<span class="badge">${t("shipProvinces")}</span><div>${s.provinces.map((p) => esc(L(PROV[p]))).join(", ")}</div>`
        : `<span class="badge no">${t("shipNone")}</span><div>${t("shipNoneBody")}</div>`;
    const retail = b.retail.map((pos) => {
      const km = loc ? haversineKm(loc.lat, loc.lng, pos.lat, pos.lng) : null;
      const map = `https://www.google.com/maps?q=${pos.lat},${pos.lng}`;
      return `<a class="pos" href="${map}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">
        <span class="ic">🏪</span><div><div class="n">${esc(pos.name)}</div><div class="a">${esc(pos.label)}</div></div>
        ${km != null ? `<span class="d">${Math.max(1, Math.round(km))} km</span>` : ""}</a>`;
    }).join("");
    const link = (key, ic, label) => b.links[key]
      ? `<a href="${b.links[key]}" target="_blank" rel="noopener"><span class="ic">${ic}</span>${label}</a>`
      : `<a class="off"><span class="ic">${ic}</span>${label}</a>`;
    return `
      ${header({ back: true })}
      <div class="gallery">${b.photos.map((p) => tile(p, "ph")).join("")}</div>
      <h1 class="brand-title">${esc(b.name)}</h1>
      <div class="brand-sub">${esc(L(b.tagline))}</div>
      <div class="brand-loc">📍 ${t("basedIn")} ${esc(b.location.label)} · ${t("pointsOfSale", b.retail.length)}</div>
      <div class="cats">${b.categories.map((c) => `<button data-cat="${c}">${CATS[c].icon} ${esc(L(CATS[c]))}</button>`).join("")}</div>
      <div class="actions">
        ${link("website", "🌐", t("website"))}
        ${link("instagram", "📷", t("instagram"))}
        ${link("whatsapp", "💬", t("whatsapp"))}
        <a href="https://www.google.com/maps?q=${b.location.lat},${b.location.lng}" target="_blank" rel="noopener"><span class="ic">🗺️</span>${t("directions")}</a>
      </div>
      <h2 class="h">${t("about")}</h2>
      <p class="about">${esc(L(b.about))}</p>
      <h2 class="h">${t("products")}</h2>
      <div class="prod-list">${b.products.map((p) => `<button data-product="${p}">${esc(L(PRODUCTS[p]))}</button>`).join("")}</div>
      <h2 class="h">${t("whereToBuy")}</h2>
      ${loc ? `<p class="demo-note" style="text-align:left;margin:-4px 0 8px">${t("distancesFrom")} ${esc(loc.label)}</p>` : ""}
      ${retail}
      <h2 class="h">${t("shipping")}</h2>
      <div class="ship-box">${shipHtml}</div>
      <p class="demo-note">${t("demoNote")}</p>`;
  }

  function viewMission() {
    const m = D.mission;
    return `
      ${header()}
      <div class="mission-hero"><span class="leaf">🍃</span><h1>${esc(L(m.title))}</h1></div>
      <div class="mission-body">${L(m.body).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <a class="mission-card" href="#/browse" style="margin-top:18px"><div><div class="t">${t("allCategories")}</div></div><div class="leaf">→</div></a>`;
  }

  /* ------------------------------------------------------------------ */
  /* Render + events                                                      */
  /* ------------------------------------------------------------------ */
  const view = document.getElementById("view");

  function render() {
    const { path, params } = parseHash();
    const [seg, id] = path.split("/");
    if (seg === "results") paramsToQ(params);
    let html, tab = "";
    if (seg === "results") html = viewResults();
    else if (seg === "brand") html = viewBrand(id);
    else if (seg === "browse") { html = viewBrowse(); tab = "browse"; }
    else if (seg === "near") { html = viewNear(); tab = "near"; }
    else if (seg === "mission") { html = viewMission(); tab = "mission"; }
    else html = viewHome();
    view.classList.remove("animate"); void view.offsetWidth;
    view.innerHTML = html; view.classList.add("animate");
    tabbar(tab);
    document.documentElement.lang = state.lang;
    window.scrollTo(0, 0);
    wire();
  }

  function wire() {
    // Language
    view.querySelectorAll("[data-lang]").forEach((btn) => btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      try { localStorage.setItem("aqui.lang", state.lang); } catch (e) { /* ignore */ }
      render();
    }));
    // Back
    const back = view.querySelector("[data-back]");
    if (back) back.addEventListener("click", () => (history.length > 1 ? history.back() : go("")));
    // Brand and category taps
    view.querySelectorAll("[data-brand]").forEach((el) => el.addEventListener("click", () => go("brand/" + el.dataset.brand)));
    view.querySelectorAll("[data-cat]").forEach((el) => el.addEventListener("click", () => { state.q.cat = el.dataset.cat; state.q.product = ""; goResults(); }));
    view.querySelectorAll("[data-product]").forEach((el) => el.addEventListener("click", () => { state.q.product = el.dataset.product; state.q.cat = ""; goResults(); }));
    // Empty-state helpers
    view.querySelectorAll("[data-widen]").forEach((el) => el.addEventListener("click", () => { state.q.r = Number(el.dataset.widen); goResults(); }));
    const inc = view.querySelector("[data-include-ship]"); if (inc) inc.addEventListener("click", () => { state.q.ship = true; goResults(); });
    const all = view.querySelector("[data-search-all]"); if (all) all.addEventListener("click", () => { state.q.place = ""; state.q.lat = null; state.q.lng = null; goResults(); });
    const edit = view.querySelector("#edit-filters"); if (edit) edit.addEventListener("click", () => { const s = view.querySelector("#filters-slot"); s.hidden = !s.hidden; });

    // Filters
    const place = view.querySelector("#place");
    if (place) place.addEventListener("change", () => {
      if (place.value === "__geo") return;
      state.q.place = place.value; state.q.lat = null; state.q.lng = null; state.q.label = "";
    });
    view.querySelectorAll("[data-r]").forEach((el) => el.addEventListener("click", () => {
      state.q.r = Number(el.dataset.r);
      view.querySelectorAll("[data-r]").forEach((c) => c.classList.toggle("on", c === el));
    }));
    const ship = view.querySelector("#ship"); if (ship) ship.addEventListener("change", () => { state.q.ship = ship.checked; });
    const geo = view.querySelector("#geo");
    if (geo) geo.addEventListener("click", () => {
      if (!navigator.geolocation) return;
      geo.textContent = "…";
      navigator.geolocation.getCurrentPosition((pos) => {
        state.q.place = ""; state.q.lat = pos.coords.latitude; state.q.lng = pos.coords.longitude;
        const n = nearestPlace(state.q.lat, state.q.lng);
        state.q.label = `${t("myLocation")} (${placeName(n)})`;
        render();
      }, () => { geo.textContent = "📍"; }, { timeout: 8000 });
    });
    const goBtn = view.querySelector("#go"); if (goBtn) goBtn.addEventListener("click", goResults);

    // Search with suggestions
    const q = view.querySelector("#q"), sug = view.querySelector("#suggest"), clear = view.querySelector("#q-clear");
    if (q) {
      const close = () => { sug.hidden = true; };
      const open = (items) => {
        if (!q.value.trim()) return close();
        sug.innerHTML = items.length
          ? items.map((it) => `<button data-kind="${it.kind}" data-id="${it.id}">${it.icon ? it.icon + " " : ""}${esc(it.label)}${it.alt ? ` <small style="color:var(--muted)">· ${esc(it.alt)}</small>` : ""}<span class="kind">${t(it.kind)}</span></button>`).join("")
          : `<div class="empty">${t("noMatch")}</div>`;
        sug.hidden = false;
        sug.querySelectorAll("button").forEach((b) => b.addEventListener("mousedown", (e) => {
          e.preventDefault();
          const { kind, id } = b.dataset;
          if (kind === "brand") return go("brand/" + id);
          if (kind === "product") { state.q.product = id; state.q.cat = ""; }
          if (kind === "category") { state.q.cat = id; state.q.product = ""; }
          goResults();
        }));
      };
      q.addEventListener("input", () => { clear.hidden = !q.value; open(suggest(q.value)); });
      q.addEventListener("focus", () => open(suggest(q.value)));
      q.addEventListener("blur", () => setTimeout(close, 120));
      q.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { const first = sug.querySelector("button"); if (first) first.dispatchEvent(new Event("mousedown")); }
        if (e.key === "Escape") close();
      });
      clear.addEventListener("click", () => { q.value = ""; clear.hidden = true; close(); q.focus(); });
    }
  }

  window.addEventListener("hashchange", render);
  render();

  // Expose for the console / tests
  window.aqui = { search, suggest, state, haversineKm };
})();
