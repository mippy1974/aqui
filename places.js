// Searchable places in Panama with coordinates and province.
// The province is what shipping coverage is matched against.
window.AQUI = window.AQUI || {};
AQUI.provinces = [
  { id: "panama",        en: "Panamá",          es: "Panamá" },
  { id: "panama-oeste",  en: "Panamá Oeste",    es: "Panamá Oeste" },
  { id: "cocle",         en: "Coclé",           es: "Coclé" },
  { id: "chiriqui",      en: "Chiriquí",        es: "Chiriquí" },
  { id: "los-santos",    en: "Los Santos",      es: "Los Santos" },
  { id: "herrera",       en: "Herrera",         es: "Herrera" },
  { id: "veraguas",      en: "Veraguas",        es: "Veraguas" },
  { id: "colon",         en: "Colón",           es: "Colón" },
  { id: "bocas",         en: "Bocas del Toro",  es: "Bocas del Toro" },
  { id: "darien",        en: "Darién",          es: "Darién" }
];
AQUI.places = [
  { id: "panama-city",     name: "Panama City",       es: "Ciudad de Panamá", province: "panama",       lat: 8.9824, lng: -79.5199 },
  { id: "casco-viejo",     name: "Casco Viejo",       province: "panama",       lat: 8.9525, lng: -79.5350 },
  { id: "coronado",        name: "Coronado",          province: "panama-oeste", lat: 8.5170, lng: -79.8890 },
  { id: "altos-del-maria", name: "Altos del María",   province: "panama-oeste", lat: 8.6200, lng: -80.0500 },
  { id: "el-valle",        name: "El Valle de Antón", province: "cocle",        lat: 8.6000, lng: -80.1250 },
  { id: "penonome",        name: "Penonomé",          province: "cocle",        lat: 8.5190, lng: -80.3560 },
  { id: "anton",           name: "Antón",             province: "cocle",        lat: 8.3970, lng: -80.2600 },
  { id: "aguadulce",       name: "Aguadulce",         province: "cocle",        lat: 8.2440, lng: -80.5430 },
  { id: "santiago",        name: "Santiago",          province: "veraguas",     lat: 8.1000, lng: -80.9830 },
  { id: "santa-fe",        name: "Santa Fe",          province: "veraguas",     lat: 8.5100, lng: -81.0800 },
  { id: "chitre",          name: "Chitré",            province: "herrera",      lat: 7.9610, lng: -80.4290 },
  { id: "las-tablas",      name: "Las Tablas",        province: "los-santos",   lat: 7.7660, lng: -80.2820 },
  { id: "pedasi",          name: "Pedasí",            province: "los-santos",   lat: 7.5330, lng: -80.0300 },
  { id: "playa-venao",     name: "Playa Venao",       province: "los-santos",   lat: 7.4300, lng: -80.2000 },
  { id: "david",           name: "David",             province: "chiriqui",     lat: 8.4330, lng: -82.4330 },
  { id: "boquete",         name: "Boquete",           province: "chiriqui",     lat: 8.7800, lng: -82.4400 },
  { id: "volcan",          name: "Volcán",            province: "chiriqui",     lat: 8.7700, lng: -82.6300 },
  { id: "las-lajas",       name: "Las Lajas",         province: "chiriqui",     lat: 8.2500, lng: -81.8700 },
  { id: "bocas-town",      name: "Bocas del Toro",    province: "bocas",        lat: 9.3400, lng: -82.2400 },
  { id: "colon",           name: "Colón",             province: "colon",        lat: 9.3590, lng: -79.9000 },
  { id: "portobelo",       name: "Portobelo",         province: "colon",        lat: 9.5540, lng: -79.6560 }
];
