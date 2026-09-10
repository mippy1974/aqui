/* aquí - demo application.
   Plain JavaScript, no framework and no build step. Open index.html and it runs.

   Reading order:
     1. STRINGS      every piece of interface text, in both languages
     2. state        what the user has chosen
     3. search()     the one function that decides which brands match
     4. views        one render function per screen
     5. router       maps the address bar hash to a view
*/

(function () {
'use strict';

/* ------------------------------------------------------------------ *
 * 1. Interface text
 * ------------------------------------------------------------------ */
var STRINGS = {
  en: {
    tagline: 'Natural and locally made, found in one place.',
    whatLabel: 'What are you looking for?',
    whatPh: 'Search a product, for example kimchi',
    whereLabel: 'Where',
    wherePh: 'Choose a town in Panama',
    useLocation: 'Use my location',
    locating: 'Finding your location…',
    locFound: 'Nearest town found: ',
    locDenied: 'No problem. Type a town instead.',
    locFail: 'Your location is not available right now. Type a town instead.',
    locNote: 'Used for this search only. Nothing is stored or sent to us.',
    radiusLabel: 'Radius',
    shipTitle: 'Ships to this location',
    shipSub: 'Include brands that deliver here',
    searchBtn: 'Search',
    browseTitle: 'Browse by category',
    browseAll: 'See all categories',
    missionTeaser: 'Supporting local',
    missionLink: 'Learn more about our mission',
    resultsTitle: 'Brands',
    resultCount: function (n) { return n === 1 ? '1 brand' : n + ' brands'; },
    nearby: 'Nearby',
    ships: 'Ships here',
    inTown: 'In town',
    km: 'km away',
    noneTitle: 'Nothing found yet',
    noneText: 'No brand matches this combination. You can widen the search.',
    tryRadius: function (r) { return 'Try a ' + r + ' km radius'; },
    tryShipping: 'Include brands that ship here',
    clearAll: 'Clear the search',
    back: 'Back',
    about: 'About',
    basedIn: 'Based in',
    productsLabel: 'Products',
    posLabel: 'Where to buy',
    shippingLabel: 'Shipping',
    shipNationwide: 'Ships anywhere in Panama',
    shipProvinces: 'Ships to: ',
    shipNone: 'No shipping. Available at the points of sale above.',
    linksLabel: 'Find this brand',
    website: 'Website',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    openLink: 'Opens outside aquí',
    legalTitle: 'Legal',
    legalSub: 'How aquí handles your information, and the terms of using it.',
    privacyName: 'Privacy Policy',
    privacySub: 'What the app collects and what it does not',
    termsName: 'Terms of Use',
    termsSub: 'What aquí is, and what it is not',
    tabHome: 'Home',
    tabBrowse: 'Browse',
    tabNear: 'Nearby',
    tabMission: 'Mission',
    nearTitle: 'What is nearby',
    nearSub: 'Pick a place and see everything available there. No product needed.',
    demoNote: 'Demo version. Brands and products shown here are invented placeholders, used to show how the app works.',
    inCategory: 'In this category',
    alsoIn: 'also',
    anyProduct: 'Any product',
    anywhere: 'Anywhere in Panama'
  },
  es: {
    tagline: 'Natural y hecho aquí, todo en un solo lugar.',
    whatLabel: '¿Qué estás buscando?',
    whatPh: 'Busca un producto, por ejemplo kimchi',
    whereLabel: 'Dónde',
    wherePh: 'Elige un lugar en Panamá',
    useLocation: 'Usar mi ubicación',
    locating: 'Buscando tu ubicación…',
    locFound: 'Lugar más cercano: ',
    locDenied: 'No hay problema. Escribe un lugar.',
    locFail: 'Tu ubicación no está disponible ahora. Escribe un lugar.',
    locNote: 'Se usa solo para esta búsqueda. No se guarda ni se envía a nosotros.',
    radiusLabel: 'Radio',
    shipTitle: 'Envía a esta ubicación',
    shipSub: 'Incluir marcas que entregan aquí',
    searchBtn: 'Buscar',
    browseTitle: 'Explorar por categoría',
    browseAll: 'Ver todas las categorías',
    missionTeaser: 'Apoyando lo local',
    missionLink: 'Conoce más sobre nuestra misión',
    resultsTitle: 'Marcas',
    resultCount: function (n) { return n === 1 ? '1 marca' : n + ' marcas'; },
    nearby: 'Cerca',
    ships: 'Envía aquí',
    inTown: 'En el pueblo',
    km: 'km de distancia',
    noneTitle: 'Todavía no hay resultados',
    noneText: 'Ninguna marca coincide con esta combinación. Puedes ampliar la búsqueda.',
    tryRadius: function (r) { return 'Probar un radio de ' + r + ' km'; },
    tryShipping: 'Incluir marcas que envían aquí',
    clearAll: 'Limpiar la búsqueda',
    back: 'Atrás',
    about: 'Sobre la marca',
    basedIn: 'Con base en',
    productsLabel: 'Productos',
    posLabel: 'Dónde comprar',
    shippingLabel: 'Envíos',
    shipNationwide: 'Envía a todo Panamá',
    shipProvinces: 'Envía a: ',
    shipNone: 'Sin envíos. Disponible en los puntos de venta de arriba.',
    linksLabel: 'Encuentra esta marca',
    website: 'Sitio web',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    openLink: 'Se abre fuera de aquí',
    legalTitle: 'Legal',
    legalSub: 'Cómo aquí maneja tu información, y los términos de uso.',
    privacyName: 'Política de Privacidad',
    privacySub: 'Qué recoge la app y qué no',
    termsName: 'Términos de Uso',
    termsSub: 'Qué es aquí, y qué no es',
    tabHome: 'Inicio',
    tabBrowse: 'Explorar',
    tabNear: 'Cerca',
    tabMission: 'Misión',
    nearTitle: 'Qué hay cerca',
    nearSub: 'Elige un lugar y mira todo lo disponible ahí. No hace falta un producto.',
    demoNote: 'Versión demo. Las marcas y productos que se muestran son inventados, para mostrar cómo funciona la app.',
    inCategory: 'En esta categoría',
    alsoIn: 'también',
    anyProduct: 'Cualquier producto',
    anywhere: 'Todo Panamá'
  }
};

var RADII = [10, 25, 50];

/* ------------------------------------------------------------------ *
 * 2. State
 * ------------------------------------------------------------------ */
var state = {
  lang: 'en',
  productId: null,
  productText: '',
  categoryId: null,
  placeId: null,
  placeText: '',
  radius: 25,
  shipping: false,
  geoMsg: ''
};

function store(key, val) {
  try { localStorage.setItem('aqui.' + key, val); } catch (e) {}
}
function recall(key) {
  try { return localStorage.getItem('aqui.' + key); } catch (e) { return null; }
}

function loadPrefs() {
  var l = recall('lang');
  if (l === 'en' || l === 'es') state.lang = l;
  else if ((navigator.language || '').toLowerCase().indexOf('es') === 0) state.lang = 'es';

  var p = recall('place');
  if (p && placeById(p)) { state.placeId = p; state.placeText = placeName(placeById(p)); }
  var r = parseInt(recall('radius'), 10);
  if (RADII.indexOf(r) > -1) state.radius = r;
}

function t() { return STRINGS[state.lang]; }
function nameOf(o) { return o[state.lang] || o.en; }
function placeName(p) { return p ? (state.lang === 'es' ? p.es : p.en) : ''; }

/* ------------------------------------------------------------------ *
 * helpers
 * ------------------------------------------------------------------ */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function el(id) { return document.getElementById(id); }
function placeById(id) {
  for (var i = 0; i < PLACES.length; i++) if (PLACES[i].id === id) return PLACES[i];
  return null;
}
function productById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
  return null;
}
function categoryById(id) {
  for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
  return null;
}
function brandBySlug(slug) {
  for (var i = 0; i < BRANDS.length; i++) if (BRANDS[i].slug === slug) return BRANDS[i];
  return null;
}
function categoryIconFor(brand) {
  var c = categoryById(brand.categories[0]);
  return c ? c.icon : 'assets/icons/browse.png';
}
/* Placeholder photos. Until real brand photos exist, each brand gets a steady
   tile colour drawn from the same warm range as the icons, so a list of
   results does not read as one flat block. */
var TINTS = ['#E7DCCB', '#E3D7CC', '#DEDACB', '#EADAD2', '#DDD9CE', '#E9E0D0'];
function tintFor(slug) {
  var n = 0;
  for (var i = 0; i < slug.length; i++) n = (n * 31 + slug.charCodeAt(i)) % 997;
  return TINTS[n % TINTS.length];
}
/* straight line distance in km */
function distance(a, b) {
  var R = 6371, toRad = Math.PI / 180;
  var dLat = (b.lat - a.lat) * toRad;
  var dLng = (b.lng - a.lng) * toRad;
  var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(a.lat * toRad) * Math.cos(b.lat * toRad) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}
function shipsTo(brand, province) {
  var s = brand.shipping;
  if (!s || s.type === 'none') return false;
  if (s.type === 'nationwide') return true;
  return s.provinces.indexOf(province) > -1;
}
/* strip accents so typing "penonome" still finds "Penonomé" */
function norm(s) {
  var v = String(s == null ? '' : s).toLowerCase();
  if (v.normalize) v = v.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return v;
}

/* ------------------------------------------------------------------ *
 * 3. Search
 *
 * Rule from the brief:
 *   filter by product and/or category first,
 *   then keep a brand if it has a point of sale inside the radius
 *   OR (shipping is on AND the brand ships to that province).
 *   Radius uses points of sale only, never the brand's own location.
 * ------------------------------------------------------------------ */
function search(q) {
  var list = BRANDS.filter(function (b) { return b.published; });

  if (q.productId) {
    list = list.filter(function (b) { return b.products.indexOf(q.productId) > -1; });
  }
  if (q.categoryId) {
    list = list.filter(function (b) { return b.categories.indexOf(q.categoryId) > -1; });
  }

  var place = q.placeId ? placeById(q.placeId) : null;

  if (!place) {
    return list.map(function (b) { return { brand: b, nearest: null, ships: false }; })
               .sort(function (a, b) { return a.brand.name.localeCompare(b.brand.name); });
  }

  var out = [];
  list.forEach(function (b) {
    var nearest = null;
    b.pos.forEach(function (p) {
      var d = distance(place, p);
      if (d <= q.radius && (!nearest || d < nearest.d)) nearest = { pos: p, d: d };
    });
    var ships = q.shipping && shipsTo(b, place.province);
    if (nearest || ships) out.push({ brand: b, nearest: nearest, ships: ships });
  });

  out.sort(function (a, b) {
    if (a.nearest && b.nearest) return a.nearest.d - b.nearest.d;
    if (a.nearest) return -1;
    if (b.nearest) return 1;
    return a.brand.name.localeCompare(b.brand.name);
  });
  return out;
}

/* ------------------------------------------------------------------ *
 * 4. Views
 * ------------------------------------------------------------------ */

function searchFormHTML(opts) {
  opts = opts || {};
  var s = t();
  var html = '';

  if (!opts.hideProduct) {
    html +=
      '<div class="field">' +
        '<label for="q">' + esc(s.whatLabel) + '</label>' +
        '<div class="input-wrap">' +
          '<img class="lead-icon" src="assets/icons/browse.png" alt="">' +
          '<input type="text" id="q" class="with-icon" autocomplete="off" ' +
                 'placeholder="' + esc(s.whatPh) + '" value="' + esc(state.productText) + '">' +
        '</div>' +
        '<div id="acProduct"></div>' +
      '</div>';
  }

  html +=
    '<div class="field">' +
      '<label for="loc">' + esc(s.whereLabel) + '</label>' +
      '<div class="input-wrap">' +
        '<img class="lead-icon" src="assets/icons/location.png" alt="">' +
        '<input type="text" id="loc" class="with-icon" autocomplete="off" ' +
               'placeholder="' + esc(s.wherePh) + '" value="' + esc(state.placeText) + '">' +
      '</div>' +
      '<div id="acPlace"></div>' +
      '<button type="button" class="geo-btn" id="geoBtn">' +
        '<img src="assets/icons/location.png" alt="">' + esc(s.useLocation) +
      '</button>' +
      '<p class="geo-msg" id="geoMsg">' + esc(state.geoMsg || s.locNote) + '</p>' +
    '</div>';

  html += '<div class="field"><label>' + esc(s.radiusLabel) + '</label><div class="chips" id="radiusChips">';
  RADII.forEach(function (r) {
    html += '<button type="button" class="chip' + (state.radius === r ? ' on' : '') +
            '" data-radius="' + r + '">' + r + ' km</button>';
  });
  html += '</div></div>';

  html +=
    '<div class="field">' +
      '<div class="toggle-row' + (state.shipping ? ' on' : '') + '" id="shipToggle" role="switch" ' +
           'aria-checked="' + (state.shipping ? 'true' : 'false') + '" tabindex="0">' +
        '<img src="assets/icons/shipping.png" alt="">' +
        '<span class="t-text"><b>' + esc(s.shipTitle) + '</b><span>' + esc(s.shipSub) + '</span></span>' +
        '<span class="switch"></span>' +
      '</div>' +
    '</div>';

  html += '<button type="button" class="btn" id="goBtn">' + esc(s.searchBtn) + '</button>';
  return html;
}

function viewHome() {
  var s = t();
  var html =
    '<p class="page-sub" style="margin-top:2px">' + esc(s.tagline) + '</p>' +
    '<div class="hero-photo"><img src="assets/hero.jpg" alt=""></div>' +
    '<div class="demo-note">' + esc(s.demoNote) + '</div>' +
    searchFormHTML({}) +
    '<div class="section-label">' + esc(s.browseTitle) + '</div>' +
    '<div class="cat-grid">';

  CATEGORIES.slice(0, 4).forEach(function (c) {
    html += '<button type="button" class="cat" data-cat="' + esc(c.id) + '">' +
              '<img src="' + esc(c.icon) + '" alt=""><span>' + esc(nameOf(c)) + '</span>' +
            '</button>';
  });
  html += '</div>' +
    '<button type="button" class="btn btn-quiet" style="margin-top:11px" data-go="#/browse">' +
      esc(s.browseAll) + '</button>' +
    '<div class="teaser" data-go="#/mission">' +
      '<img src="assets/icons/mission.png" alt="">' +
      '<span><b>' + esc(s.missionTeaser) + '</b><span>' + esc(s.missionLink) + '</span></span>' +
    '</div>' +
    footerHTML();

  render(html);
  wireSearchForm();
  wireCatButtons();
}

function viewNearby() {
  var s = t();
  var html =
    '<h1 class="page-title">' + esc(s.nearTitle) + '</h1>' +
    '<p class="page-sub">' + esc(s.nearSub) + '</p>' +
    searchFormHTML({ hideProduct: true }) +
    footerHTML();
  render(html);
  wireSearchForm({ hideProduct: true });
}

function viewBrowse() {
  var s = t();
  var html =
    '<h1 class="page-title">' + esc(s.browseTitle) + '</h1>' +
    '<p class="page-sub">' + esc(s.tagline) + '</p>' +
    '<div class="cat-grid">';
  CATEGORIES.forEach(function (c) {
    html += '<button type="button" class="cat" data-cat="' + esc(c.id) + '">' +
              '<img src="' + esc(c.icon) + '" alt=""><span>' + esc(nameOf(c)) + '</span>' +
            '</button>';
  });
  html += '</div>' + footerHTML();
  render(html);
  wireCatButtons();
}

function resultTagsHTML(row) {
  var s = t(), tags = '';
  if (row.nearest) {
    var d = row.nearest.d;
    var label = d < 1.5 ? s.inTown : (Math.round(d) + ' ' + s.km);
    tags += '<span class="tag solid">' + esc(row.nearest.pos.name) + ' · ' + esc(label) + '</span>';
  }
  if (row.ships) tags += '<span class="tag">' + esc(s.ships) + '</span>';
  return tags ? '<div class="why">' + tags + '</div>' : '';
}

function viewResults() {
  var s = t();
  var rows = search(state);
  var prod = state.productId ? productById(state.productId) : null;
  var cat = state.categoryId ? categoryById(state.categoryId) : null;
  var place = state.placeId ? placeById(state.placeId) : null;

  var heading = prod ? nameOf(prod) : (cat ? nameOf(cat) : s.resultsTitle);
  var sub = [];
  sub.push(place ? placeName(place) + ' · ' + state.radius + ' km' : s.anywhere);
  if (state.shipping) sub.push(s.ships.toLowerCase());

  var html =
    '<button type="button" class="back" data-back="1">‹ ' + esc(s.back) + '</button>' +
    '<div class="results-head">' +
      '<h2>' + esc(heading) + '</h2>' +
      '<span class="count">' + esc(s.resultCount(rows.length)) + '</span>' +
    '</div>' +
    '<p class="page-sub" style="margin-top:-8px">' + esc(sub.join(' · ')) + '</p>';

  if (!rows.length) {
    html += '<div class="empty"><h3>' + esc(s.noneTitle) + '</h3><p>' + esc(s.noneText) + '</p>';
    var bigger = null;
    for (var i = 0; i < RADII.length; i++) if (RADII[i] > state.radius) { bigger = RADII[i]; break; }
    if (place && bigger) {
      html += '<button type="button" class="btn" data-widen="' + bigger + '">' +
                esc(s.tryRadius(bigger)) + '</button>';
    }
    if (place && !state.shipping) {
      html += '<button type="button" class="btn btn-quiet" data-shipon="1">' + esc(s.tryShipping) + '</button>';
    }
    html += '<button type="button" class="btn btn-quiet" style="margin-top:8px" data-clear="1">' +
              esc(s.clearAll) + '</button></div>';
  } else {
    rows.forEach(function (row) {
      var b = row.brand;
      html +=
        '<div class="card" data-brand="' + esc(b.slug) + '">' +
          '<div class="thumb" style="background:' + tintFor(b.slug) + '">' +
            '<img src="' + esc(categoryIconFor(b)) + '" alt=""></div>' +
          '<div class="card-body">' +
            '<h3>' + esc(b.name) + '</h3>' +
            '<p>' + esc(nameOf(b.tagline)) + '</p>' +
            resultTagsHTML(row) +
          '</div>' +
        '</div>';
    });
  }

  html += footerHTML();
  render(html);

  each('[data-brand]', function (n) {
    n.onclick = function () { location.hash = '#/brand/' + n.getAttribute('data-brand'); };
  });
  each('[data-widen]', function (n) {
    n.onclick = function () {
      state.radius = parseInt(n.getAttribute('data-widen'), 10);
      store('radius', state.radius); viewResults();
    };
  });
  each('[data-shipon]', function (n) {
    n.onclick = function () { state.shipping = true; viewResults(); };
  });
  each('[data-clear]', function (n) {
    n.onclick = function () {
      state.productId = null; state.productText = '';
      state.categoryId = null; state.shipping = false;
      location.hash = '#/';
    };
  });
  each('[data-back]', function (n) {
    n.onclick = function () { history.back(); };
  });
}

function viewBrand(slug) {
  var s = t();
  var b = brandBySlug(slug);
  if (!b) { location.hash = '#/'; return; }

  var cats = b.categories.map(function (id) {
    var c = categoryById(id);
    return c ? '<span class="tag">' + esc(nameOf(c)) + '</span>' : '';
  }).join('');

  var prods = b.products.map(function (id) {
    var p = productById(id);
    return p ? '<span class="tag">' + esc(nameOf(p)) + '</span>' : '';
  }).join('');

  var posHTML = b.pos.map(function (p) {
    var town = state.lang === 'es' ? p.townEs : p.town;
    return '<div class="pos-item">' + esc(p.name) +
           '<span>' + esc(town) + ', ' + esc(p.province) + '</span></div>';
  }).join('');

  var shipText = b.shipping.type === 'nationwide' ? s.shipNationwide
               : b.shipping.type === 'none' ? s.shipNone
               : s.shipProvinces + b.shipping.provinces.join(', ');

  var links = '';
  if (b.links.website) {
    links += '<a class="link-btn" href="https://' + esc(b.links.website) + '" target="_blank" rel="noopener">' +
             '<span>' + esc(s.website) + '</span><em>' + esc(s.openLink) + '</em></a>';
  }
  if (b.links.instagram) {
    links += '<a class="link-btn" href="https://instagram.com/' + esc(b.links.instagram) + '" target="_blank" rel="noopener">' +
             '<span>' + esc(s.instagram) + '</span><em>@' + esc(b.links.instagram) + '</em></a>';
  }
  if (b.links.whatsapp) {
    links += '<a class="link-btn" href="https://wa.me/' + esc(b.links.whatsapp.replace(/[^0-9]/g, '')) +
             '" target="_blank" rel="noopener">' +
             '<span>' + esc(s.whatsapp) + '</span><em>' + esc(b.links.whatsapp) + '</em></a>';
  }

  var baseTown = state.lang === 'es' ? b.base.townEs : b.base.town;

  render(
    '<button type="button" class="back" data-back="1">‹ ' + esc(s.back) + '</button>' +
    '<div class="hero" style="background:' + tintFor(b.slug) + '">' +
      '<img src="' + esc(categoryIconFor(b)) + '" alt=""></div>' +
    '<h1 class="brand-name">' + esc(b.name) + '</h1>' +
    '<p class="brand-tag">' + esc(nameOf(b.tagline)) + '</p>' +
    '<div class="pill-list">' + cats + '</div>' +
    '<div class="kv" style="border-top:0;padding-top:16px">' +
      '<b>' + esc(s.about) + '</b><div class="about">' + esc(nameOf(b.about)) + '</div>' +
    '</div>' +
    '<div class="kv"><b>' + esc(s.basedIn) + '</b>' +
      '<div class="val">' + esc(baseTown) + ', ' + esc(b.base.province) + '</div></div>' +
    '<div class="kv"><b>' + esc(s.productsLabel) + '</b><div class="pill-list">' + prods + '</div></div>' +
    '<div class="kv"><b>' + esc(s.posLabel) + '</b>' + posHTML + '</div>' +
    '<div class="kv"><b>' + esc(s.shippingLabel) + '</b><div class="val">' + esc(shipText) + '</div></div>' +
    '<div class="kv"><b>' + esc(s.linksLabel) + '</b><div class="links">' + links + '</div></div>' +
    footerHTML()
  );

  each('[data-back]', function (n) { n.onclick = function () { history.back(); }; });
}

function docPageHTML(doc) {
  var html = '';
  if (doc.updated) html += '<p class="updated">' + esc(doc.updated) + '</p>';
  if (doc.lead) html += '<p class="lead">' + esc(doc.lead) + '</p>';
  html += '<div class="doc">';
  doc.sections.forEach(function (sec) {
    html += '<h3>' + esc(sec.h) + '</h3>';
    sec.p.forEach(function (para) { html += '<p>' + esc(para) + '</p>'; });
  });
  html += '</div>';
  return html;
}

function viewMission() {
  var doc = CONTENT.mission[state.lang];
  render(
    '<h1 class="page-title">' + esc(doc.title) + '</h1>' +
    docPageHTML(doc) + footerHTML()
  );
}

function viewLegalIndex() {
  var s = t();
  render(
    '<h1 class="page-title">' + esc(s.legalTitle) + '</h1>' +
    '<p class="page-sub">' + esc(s.legalSub) + '</p>' +
    '<div class="legal-list">' +
      '<div class="legal-item" data-go="#/legal/privacy">' +
        '<span><b>' + esc(s.privacyName) + '</b><span>' + esc(s.privacySub) + '</span></span></div>' +
      '<div class="legal-item" data-go="#/legal/terms">' +
        '<span><b>' + esc(s.termsName) + '</b><span>' + esc(s.termsSub) + '</span></span></div>' +
    '</div>' + footerHTML()
  );
}

function viewLegalDoc(which) {
  var s = t();
  var doc = CONTENT[which][state.lang];
  render(
    '<button type="button" class="back" data-back="1">‹ ' + esc(s.back) + '</button>' +
    '<h1 class="page-title">' + esc(doc.title) + '</h1>' +
    docPageHTML(doc) + footerHTML()
  );
  each('[data-back]', function (n) { n.onclick = function () { history.back(); }; });
}

function footerHTML() {
  var s = t();
  return '<div class="mini-foot">' +
    '<a href="#/mission">' + esc(s.tabMission) + '</a>' +
    '<a href="#/legal/privacy">' + esc(s.privacyName) + '</a>' +
    '<a href="#/legal/terms">' + esc(s.termsName) + '</a>' +
  '</div>';
}

/* ------------------------------------------------------------------ *
 * wiring
 * ------------------------------------------------------------------ */
function each(sel, fn) {
  var nodes = document.querySelectorAll(sel);
  for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
}

function render(html) {
  var v = el('view');
  v.innerHTML = html;
  window.scrollTo(0, 0);
  each('[data-go]', function (n) {
    n.onclick = function () { location.hash = n.getAttribute('data-go'); };
  });
}

function wireCatButtons() {
  each('[data-cat]', function (n) {
    n.onclick = function () {
      state.categoryId = n.getAttribute('data-cat');
      state.productId = null; state.productText = '';
      location.hash = '#/results';
    };
  });
}

function autocomplete(inputId, boxId, getItems, onPick) {
  var input = el(inputId), box = el(boxId);
  if (!input || !box) return;

  function close() { box.innerHTML = ''; }

  input.addEventListener('input', function () {
    var q = norm(input.value.trim());
    if (q.length < 1) { close(); return; }
    var items = getItems(q).slice(0, 7);
    if (!items.length) { close(); return; }
    var html = '<div class="ac">';
    items.forEach(function (it, i) {
      html += '<div data-i="' + i + '">' + esc(it.label) +
              (it.note ? '<span class="ac-note">' + esc(it.note) + '</span>' : '') + '</div>';
    });
    html += '</div>';
    box.innerHTML = html;
    each('#' + boxId + ' .ac div', function (n) {
      n.onclick = function () {
        var it = items[parseInt(n.getAttribute('data-i'), 10)];
        input.value = it.label;
        onPick(it);
        close();
      };
    });
  });

  input.addEventListener('blur', function () { setTimeout(close, 180); });
}

function wireSearchForm(opts) {
  opts = opts || {};
  var s = t();

  if (!opts.hideProduct) {
    autocomplete('q', 'acProduct', function (q) {
      var out = [];
      PRODUCTS.forEach(function (p) {
        var here = norm(nameOf(p)), there = norm(state.lang === 'es' ? p.en : p.es);
        if (here.indexOf(q) > -1) out.push({ id: p.id, label: nameOf(p) });
        else if (there.indexOf(q) > -1) {
          out.push({ id: p.id, label: nameOf(p), note: (state.lang === 'es' ? p.en : p.es) });
        }
      });
      return out;
    }, function (it) {
      state.productId = it.id;
      state.productText = it.label;
    });

    var qi = el('q');
    if (qi) qi.addEventListener('input', function () {
      state.productText = qi.value;
      if (!qi.value.trim()) state.productId = null;
    });
  }

  autocomplete('loc', 'acPlace', function (q) {
    var out = [];
    PLACES.forEach(function (p) {
      if (norm(placeName(p)).indexOf(q) > -1 || norm(p.province).indexOf(q) > -1) {
        out.push({ id: p.id, label: placeName(p), note: p.province });
      }
    });
    return out;
  }, function (it) {
    state.placeId = it.id;
    state.placeText = it.label;
    state.geoMsg = '';
    store('place', it.id);
  });

  var li = el('loc');
  if (li) li.addEventListener('input', function () {
    state.placeText = li.value;
    if (!li.value.trim()) { state.placeId = null; try { localStorage.removeItem('aqui.place'); } catch (e) {} }
  });

  /* Use my location.
     Reads the browser position once, matches it to the nearest town in
     data/places.js, and throws the coordinates away. Nothing is stored. */
  var geo = el('geoBtn'), msg = el('geoMsg');
  if (geo) geo.onclick = function () {
    if (!navigator.geolocation) { msg.textContent = s.locFail; return; }
    geo.disabled = true;
    msg.textContent = s.locating;
    navigator.geolocation.getCurrentPosition(function (pos) {
      var here = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      var best = null;
      PLACES.forEach(function (p) {
        var d = distance(here, p);
        if (!best || d < best.d) best = { p: p, d: d };
      });
      state.placeId = best.p.id;
      state.placeText = placeName(best.p);
      store('place', best.p.id);
      el('loc').value = state.placeText;
      state.geoMsg = s.locFound + state.placeText + '. ' + s.locNote;
      msg.textContent = state.geoMsg;
      geo.disabled = false;
    }, function (err) {
      msg.textContent = (err && err.code === 1) ? s.locDenied : s.locFail;
      geo.disabled = false;
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
  };

  each('#radiusChips .chip', function (n) {
    n.onclick = function () {
      state.radius = parseInt(n.getAttribute('data-radius'), 10);
      store('radius', state.radius);
      each('#radiusChips .chip', function (m) { m.classList.remove('on'); });
      n.classList.add('on');
    };
  });

  var tg = el('shipToggle');
  if (tg) {
    var flip = function () {
      state.shipping = !state.shipping;
      tg.classList.toggle('on', state.shipping);
      tg.setAttribute('aria-checked', state.shipping ? 'true' : 'false');
    };
    tg.onclick = flip;
    tg.onkeydown = function (e) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    };
  }

  var go = el('goBtn');
  if (go) go.onclick = function () {
    if (opts.hideProduct) { state.productId = null; state.productText = ''; state.categoryId = null; }
    location.hash = '#/results';
  };
}

/* ------------------------------------------------------------------ *
 * language + tabs
 * ------------------------------------------------------------------ */
function setLang(l) {
  state.lang = l;
  store('lang', l);
  document.documentElement.lang = l;
  if (state.productId) state.productText = nameOf(productById(state.productId));
  if (state.placeId) state.placeText = placeName(placeById(state.placeId));
  paintLang();
  paintTabs();
  route();
}

function paintLang() {
  each('.lang-btn', function (b) {
    b.classList.toggle('on', b.getAttribute('data-lang') === state.lang);
  });
}

var TABS = [
  { hash: '#/',        icon: 'assets/icons/home.png',     key: 'tabHome' },
  { hash: '#/browse',  icon: 'assets/icons/browse.png',   key: 'tabBrowse' },
  { hash: '#/nearby',  icon: 'assets/icons/location.png', key: 'tabNear' },
  { hash: '#/mission', icon: 'assets/icons/mission.png',  key: 'tabMission' }
];

function paintTabs() {
  var s = t(), cur = location.hash || '#/';
  var html = '';
  TABS.forEach(function (tab) {
    var on = (tab.hash === '#/' && (cur === '#/' || cur === '')) ||
             (tab.hash !== '#/' && cur.indexOf(tab.hash) === 0);
    html += '<button type="button" class="tab' + (on ? ' on' : '') + '" data-go="' + tab.hash + '">' +
              '<img src="' + tab.icon + '" alt="">' + esc(s[tab.key]) + '</button>';
  });
  el('tabbar').innerHTML = html;
  each('#tabbar [data-go]', function (n) {
    n.onclick = function () { location.hash = n.getAttribute('data-go'); };
  });
}

/* ------------------------------------------------------------------ *
 * 5. Router
 * ------------------------------------------------------------------ */
function route() {
  var h = location.hash || '#/';
  paintTabs();

  if (h.indexOf('#/brand/') === 0) return viewBrand(h.slice('#/brand/'.length));
  if (h === '#/results') return viewResults();
  if (h === '#/browse') return viewBrowse();
  if (h === '#/nearby') return viewNearby();
  if (h === '#/mission') return viewMission();
  if (h === '#/legal') return viewLegalIndex();
  if (h === '#/legal/privacy') return viewLegalDoc('privacy');
  if (h === '#/legal/terms') return viewLegalDoc('terms');
  return viewHome();
}

window.addEventListener('hashchange', route);

loadPrefs();
document.documentElement.lang = state.lang;
each('.lang-btn', function (b) {
  b.onclick = function () { setLang(b.getAttribute('data-lang')); };
});
paintLang();
route();

})();
