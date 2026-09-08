// Brands are the central entity. Every brand record carries:
//   location  : where the brand is based or produces (NOT used for radius search)
//   retail    : physical points of sale with coordinates (USED for radius search)
//   shipping  : { type: "nationwide" } | { type: "provinces", provinces: [...] } | { type: "none" }
//   products  : ids from products.js (many-to-many)
//   categories: ids from categories.js (a brand can have several)
//   about     : English and Spanish text
//   photos    : placeholder tiles for the demo (color + icon). Real photos replace these later.
// All brands, people and shops below are invented for the demo.
window.AQUI = window.AQUI || {};
AQUI.brands = [
  {
    id: "fermentos-de-cocle",
    name: "Fermentos de Coclé",
    tagline: { en: "Small-batch ferments from the interior", es: "Fermentos en pequeños lotes del interior" },
    about: {
      en: "A two-person kitchen in Aguadulce making kimchi, sauerkraut and kombucha with vegetables from nearby farms. Everything is fermented slowly, without vinegar or preservatives.",
      es: "Una cocina de dos personas en Aguadulce que hace kimchi, chucrut y kombucha con vegetales de fincas cercanas. Todo se fermenta lentamente, sin vinagre ni conservantes."
    },
    location: { place: "aguadulce", label: "Aguadulce, Coclé", lat: 8.2440, lng: -80.5430 },
    categories: ["food"],
    products: ["kimchi", "sauerkraut", "kombucha", "hot-sauce"],
    retail: [
      { name: "Mercado Público de Penonomé", label: "Penonomé, Coclé", lat: 8.5180, lng: -80.3570 },
      { name: "Tienda Verde Aguadulce", label: "Aguadulce, Coclé", lat: 8.2450, lng: -80.5400 },
      { name: "Feria del Valle (Sundays)", label: "El Valle de Antón, Coclé", lat: 8.6010, lng: -80.1260 }
    ],
    shipping: { type: "provinces", provinces: ["cocle", "panama", "panama-oeste"] },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000001" },
    tone: "#8a9a5b",
    photos: [ { bg: "#8a9a5b", icon: "🥬" }, { bg: "#c9a66b", icon: "🫙" }, { bg: "#b5651d", icon: "🌶️" } ],
    featured: true
  },
  {
    id: "kimchi-panama",
    name: "Kimchi Panamá",
    tagline: { en: "Korean-Panamanian ferments, shipped anywhere", es: "Fermentos coreano-panameños, envío a todo el país" },
    about: {
      en: "Founded by a Korean-Panamanian family in Panama City. Classic napa kimchi plus a local version with ají chombo. Ships nationwide in insulated boxes.",
      es: "Fundada por una familia coreano-panameña en la Ciudad de Panamá. Kimchi clásico de repollo napa y una versión local con ají chombo. Envíos a todo el país en cajas aisladas."
    },
    location: { place: "panama-city", label: "Panama City", lat: 8.9900, lng: -79.5100 },
    categories: ["food"],
    products: ["kimchi", "hot-sauce"],
    retail: [
      { name: "Mercado Urbano, Obarrio", label: "Panama City", lat: 8.9860, lng: -79.5200 },
      { name: "Riba Smith Costa del Este", label: "Panama City", lat: 9.0080, lng: -79.4680 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000002" },
    tone: "#b5651d",
    photos: [ { bg: "#b5651d", icon: "🥬" }, { bg: "#8a9a5b", icon: "📦" } ],
    featured: false
  },
  {
    id: "raiz-fermentada",
    name: "Raíz Fermentada",
    tagline: { en: "Highland ferments from Boquete", es: "Fermentos de las tierras altas de Boquete" },
    about: {
      en: "Kimchi, sauerkraut and kombucha made with Boquete vegetables and mountain water. Sold only in Chiriquí; no shipping yet.",
      es: "Kimchi, chucrut y kombucha hechos con vegetales de Boquete y agua de montaña. Solo se vende en Chiriquí; todavía sin envíos."
    },
    location: { place: "boquete", label: "Boquete, Chiriquí", lat: 8.7800, lng: -82.4400 },
    categories: ["food"],
    products: ["kimchi", "sauerkraut", "kombucha"],
    retail: [
      { name: "Boquete Tuesday Market", label: "Boquete, Chiriquí", lat: 8.7810, lng: -82.4380 },
      { name: "Organic Corner David", label: "David, Chiriquí", lat: 8.4300, lng: -82.4300 }
    ],
    shipping: { type: "none" },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000003" },
    tone: "#6b7a4a",
    photos: [ { bg: "#6b7a4a", icon: "🥬" }, { bg: "#a3b18a", icon: "⛰️" } ],
    featured: false
  },
  {
    id: "bocas-ferments",
    name: "Bocas Ferments",
    tagline: { en: "Island kombucha and kimchi", es: "Kombucha y kimchi de la isla" },
    about: {
      en: "Made on Isla Colón with tropical fruit second ferments. Available on the islands and by boat delivery within Bocas del Toro.",
      es: "Hecho en Isla Colón con segundas fermentaciones de fruta tropical. Disponible en las islas y con entrega en lancha dentro de Bocas del Toro."
    },
    location: { place: "bocas-town", label: "Bocas del Toro", lat: 9.3400, lng: -82.2400 },
    categories: ["food"],
    products: ["kombucha", "kimchi"],
    retail: [
      { name: "Isla Colón Farmers Market", label: "Bocas del Toro", lat: 9.3410, lng: -82.2420 }
    ],
    shipping: { type: "provinces", provinces: ["bocas"] },
    links: { instagram: "https://instagram.com/" },
    tone: "#4f8a8b",
    photos: [ { bg: "#4f8a8b", icon: "🍍" }, { bg: "#c9a66b", icon: "🫙" } ],
    featured: false
  },
  {
    id: "masa-madre-pty",
    name: "Masa Madre PTY",
    tagline: { en: "Naturally leavened bread, baked daily", es: "Pan de fermentación natural, horneado a diario" },
    about: {
      en: "A neighborhood bakery in San Francisco, Panama City. Sourdough loaves, granola and seasonal jams. Delivery within Panama City and Panamá Oeste.",
      es: "Una panadería de barrio en San Francisco, Ciudad de Panamá. Panes de masa madre, granola y mermeladas de temporada. Entregas en Ciudad de Panamá y Panamá Oeste."
    },
    location: { place: "panama-city", label: "Panama City", lat: 8.9930, lng: -79.5030 },
    categories: ["food"],
    products: ["sourdough", "granola", "jam"],
    retail: [
      { name: "Masa Madre bakery, San Francisco", label: "Panama City", lat: 8.9930, lng: -79.5030 },
      { name: "Coronado Farmers Market (Sat)", label: "Coronado, Panamá Oeste", lat: 8.5200, lng: -79.8850 }
    ],
    shipping: { type: "provinces", provinces: ["panama", "panama-oeste"] },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000005" },
    tone: "#c9a66b",
    photos: [ { bg: "#c9a66b", icon: "🍞" }, { bg: "#8a9a5b", icon: "🥣" }, { bg: "#b5651d", icon: "🍓" } ],
    featured: true
  },
  {
    id: "horno-de-lena-boquete",
    name: "Horno de Leña Boquete",
    tagline: { en: "Wood-fired sourdough in the highlands", es: "Masa madre a leña en las tierras altas" },
    about: {
      en: "Sourdough, granola and peanut butter from a wood-fired oven in Alto Boquete. Sold at the Tuesday market and a few cafés in town.",
      es: "Masa madre, granola y mantequilla de maní de un horno de leña en Alto Boquete. Se vende en el mercado de los martes y en algunos cafés del pueblo."
    },
    location: { place: "boquete", label: "Boquete, Chiriquí", lat: 8.7900, lng: -82.4350 },
    categories: ["food"],
    products: ["sourdough", "granola", "peanut-butter"],
    retail: [
      { name: "Boquete Tuesday Market", label: "Boquete, Chiriquí", lat: 8.7810, lng: -82.4380 },
      { name: "Café Ruiz storefront", label: "Boquete, Chiriquí", lat: 8.7750, lng: -82.4410 }
    ],
    shipping: { type: "none" },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000006" },
    tone: "#a0522d",
    photos: [ { bg: "#a0522d", icon: "🍞" }, { bg: "#6b7a4a", icon: "🔥" } ],
    featured: false
  },
  {
    id: "cacao-de-bocas",
    name: "Cacao de Bocas",
    tagline: { en: "Bean-to-bar chocolate from Bocas del Toro", es: "Chocolate del grano a la barra de Bocas del Toro" },
    about: {
      en: "Cacao grown by Ngäbe families and processed on a small farm near Almirante. Bars, nibs and drinking chocolate. Ships nationwide.",
      es: "Cacao cultivado por familias Ngäbe y procesado en una pequeña finca cerca de Almirante. Barras, nibs y chocolate para beber. Envíos a todo el país."
    },
    location: { place: "bocas-town", label: "Bocas del Toro", lat: 9.3000, lng: -82.3900 },
    categories: ["food"],
    products: ["chocolate", "cacao-nibs"],
    retail: [
      { name: "Farm shop, Almirante road", label: "Bocas del Toro", lat: 9.3000, lng: -82.3900 },
      { name: "Casco Viejo artisan market", label: "Panama City", lat: 8.9520, lng: -79.5340 },
      { name: "Boquete Tuesday Market", label: "Boquete, Chiriquí", lat: 8.7810, lng: -82.4380 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/" },
    tone: "#5c4033",
    photos: [ { bg: "#5c4033", icon: "🍫" }, { bg: "#8a9a5b", icon: "🌱" }, { bg: "#c9a66b", icon: "☕" } ],
    featured: true
  },
  {
    id: "finca-luz-coffee",
    name: "Finca Luz",
    tagline: { en: "Specialty coffee from a family farm", es: "Café de especialidad de una finca familiar" },
    about: {
      en: "Third-generation coffee farm above Boquete. Washed and natural lots, roasted weekly. Also sells raw honey from the farm's hives.",
      es: "Finca cafetalera de tercera generación sobre Boquete. Lotes lavados y naturales, tostados cada semana. También vende miel cruda de las colmenas de la finca."
    },
    location: { place: "boquete", label: "Boquete, Chiriquí", lat: 8.8100, lng: -82.4500 },
    categories: ["food"],
    products: ["coffee", "honey"],
    retail: [
      { name: "Finca Luz farm store", label: "Boquete, Chiriquí", lat: 8.8100, lng: -82.4500 },
      { name: "Volcán Saturday Market", label: "Volcán, Chiriquí", lat: 8.7700, lng: -82.6300 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000008" },
    tone: "#7b4b2a",
    photos: [ { bg: "#7b4b2a", icon: "☕" }, { bg: "#c9a66b", icon: "🍯" } ],
    featured: true
  },
  {
    id: "queseria-volcan",
    name: "Quesería Volcán",
    tagline: { en: "Aged cheeses from the slopes of Barú", es: "Quesos madurados de las faldas del Barú" },
    about: {
      en: "Raw-milk cheeses from a small dairy herd in Volcán. Sold at the dairy and at markets across Chiriquí. Shipping within Chiriquí only.",
      es: "Quesos de leche cruda de un pequeño hato lechero en Volcán. Se vende en la quesería y en mercados de Chiriquí. Envíos solo dentro de Chiriquí."
    },
    location: { place: "volcan", label: "Volcán, Chiriquí", lat: 8.7700, lng: -82.6300 },
    categories: ["food"],
    products: ["cheese"],
    retail: [
      { name: "Quesería Volcán shop", label: "Volcán, Chiriquí", lat: 8.7700, lng: -82.6300 },
      { name: "Boquete Tuesday Market", label: "Boquete, Chiriquí", lat: 8.7810, lng: -82.4380 }
    ],
    shipping: { type: "provinces", provinces: ["chiriqui"] },
    links: { whatsapp: "https://wa.me/50760000009" },
    tone: "#d9b382",
    photos: [ { bg: "#d9b382", icon: "🧀" }, { bg: "#6b7a4a", icon: "🐄" } ],
    featured: false
  },
  {
    id: "sol-de-tierra",
    name: "Sol de Tierra",
    tagline: { en: "Botanical skincare from Panamanian plants", es: "Cuidado botánico de la piel con plantas panameñas" },
    about: {
      en: "Simple, effective skincare made from Panamanian plants. Small batches, no synthetic fragrance. Based in Coronado with points of sale on both coasts.",
      es: "Cuidado de la piel simple y efectivo hecho con plantas panameñas. Lotes pequeños, sin fragancias sintéticas. Con base en Coronado y puntos de venta en ambas costas."
    },
    location: { place: "coronado", label: "Coronado, Panamá Oeste", lat: 8.5170, lng: -79.8890 },
    categories: ["skincare", "ritual"],
    products: ["face-oil", "face-cream", "body-scrub", "soap", "candle"],
    retail: [
      { name: "Sol de Tierra studio", label: "Coronado, Panamá Oeste", lat: 8.5170, lng: -79.8890 },
      { name: "Casco Viejo artisan market", label: "Panama City", lat: 8.9520, lng: -79.5340 },
      { name: "El Valle Sunday market", label: "El Valle de Antón, Coclé", lat: 8.6010, lng: -80.1260 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000010" },
    tone: "#a3b18a",
    photos: [ { bg: "#a3b18a", icon: "🧴" }, { bg: "#c9a66b", icon: "🌿" }, { bg: "#e0c9a6", icon: "🧼" } ],
    featured: true
  },
  {
    id: "jabones-de-la-abuela",
    name: "Jabones de la Abuela",
    tagline: { en: "Cold-process soaps from Penonomé", es: "Jabones de proceso en frío de Penonomé" },
    about: {
      en: "Soaps, shampoo bars and deodorant made with coconut oil and local herbs. A family workshop in Penonomé; delivery across Coclé.",
      es: "Jabones, champús sólidos y desodorantes hechos con aceite de coco y hierbas locales. Un taller familiar en Penonomé; entregas en todo Coclé."
    },
    location: { place: "penonome", label: "Penonomé, Coclé", lat: 8.5200, lng: -80.3600 },
    categories: ["skincare"],
    products: ["soap", "shampoo-bar", "deodorant", "lip-balm"],
    retail: [
      { name: "Workshop storefront", label: "Penonomé, Coclé", lat: 8.5200, lng: -80.3600 },
      { name: "Mercado Público de Penonomé", label: "Penonomé, Coclé", lat: 8.5180, lng: -80.3570 }
    ],
    shipping: { type: "provinces", provinces: ["cocle"] },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000011" },
    tone: "#e0c9a6",
    photos: [ { bg: "#e0c9a6", icon: "🧼" }, { bg: "#8a9a5b", icon: "🌿" } ],
    featured: false
  },
  {
    id: "piel-de-david",
    name: "Piel Chiricana",
    tagline: { en: "Mineral sunscreen and hair oils from David", es: "Protector mineral y aceites capilares de David" },
    about: {
      en: "Reef-safe mineral sunscreen, hair oil and lip balm made in David. Sold in David and shipped to Chiriquí and Bocas del Toro.",
      es: "Protector solar mineral seguro para arrecifes, aceite capilar y bálsamo labial hechos en David. Se vende en David y se envía a Chiriquí y Bocas del Toro."
    },
    location: { place: "david", label: "David, Chiriquí", lat: 8.4330, lng: -82.4330 },
    categories: ["skincare"],
    products: ["sunscreen", "hair-oil", "lip-balm"],
    retail: [
      { name: "Organic Corner David", label: "David, Chiriquí", lat: 8.4300, lng: -82.4300 }
    ],
    shipping: { type: "provinces", provinces: ["chiriqui", "bocas"] },
    links: { instagram: "https://instagram.com/" },
    tone: "#d4a373",
    photos: [ { bg: "#d4a373", icon: "☀️" }, { bg: "#a3b18a", icon: "💧" } ],
    featured: false
  },
  {
    id: "hierbas-del-valle",
    name: "Hierbas del Valle",
    tagline: { en: "Teas and tinctures from El Valle", es: "Tés y tinturas de El Valle" },
    about: {
      en: "Herbal teas, tinctures and salves from a garden in El Valle de Antón. Grown, dried and blended by hand. Ships nationwide.",
      es: "Tés de hierbas, tinturas y ungüentos de un jardín en El Valle de Antón. Cultivados, secados y mezclados a mano. Envíos a todo el país."
    },
    location: { place: "el-valle", label: "El Valle de Antón, Coclé", lat: 8.6000, lng: -80.1250 },
    categories: ["herbs", "ritual"],
    products: ["herbal-tea", "tincture", "salve", "incense"],
    retail: [
      { name: "El Valle Sunday market", label: "El Valle de Antón, Coclé", lat: 8.6010, lng: -80.1260 },
      { name: "Altos del María community shop", label: "Altos del María, Panamá Oeste", lat: 8.6200, lng: -80.0500 },
      { name: "Coronado Farmers Market (Sat)", label: "Coronado, Panamá Oeste", lat: 8.5200, lng: -79.8850 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000013" },
    tone: "#6b7a4a",
    photos: [ { bg: "#6b7a4a", icon: "🍵" }, { bg: "#c9a66b", icon: "🌿" }, { bg: "#a3b18a", icon: "🫙" } ],
    featured: true
  },
  {
    id: "moringa-azuero",
    name: "Moringa Azuero",
    tagline: { en: "Moringa and turmeric from the dry arc", es: "Moringa y cúrcuma del arco seco" },
    about: {
      en: "Moringa powder, turmeric paste and elderberry syrup from a regenerative farm near Pedasí. Ships nationwide.",
      es: "Moringa en polvo, pasta de cúrcuma y jarabe de saúco de una finca regenerativa cerca de Pedasí. Envíos a todo el país."
    },
    location: { place: "pedasi", label: "Pedasí, Los Santos", lat: 7.5400, lng: -80.0400 },
    categories: ["herbs", "food"],
    products: ["moringa", "turmeric", "elderberry", "honey"],
    retail: [
      { name: "Pedasí Saturday market", label: "Pedasí, Los Santos", lat: 7.5330, lng: -80.0300 },
      { name: "Venao surf shop shelf", label: "Playa Venao, Los Santos", lat: 7.4300, lng: -80.2000 },
      { name: "Las Tablas health store", label: "Las Tablas, Los Santos", lat: 7.7660, lng: -80.2820 }
    ],
    shipping: { type: "nationwide" },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000014" },
    tone: "#8a9a5b",
    photos: [ { bg: "#8a9a5b", icon: "🌱" }, { bg: "#d4a373", icon: "🫚" } ],
    featured: false
  },
  {
    id: "luna-roja",
    name: "Luna Roja",
    tagline: { en: "Reusable menstrual care, made in Panama", es: "Cuidado menstrual reutilizable, hecho en Panamá" },
    about: {
      en: "Cloth pads and period underwear sewn in Panama City, plus menstrual cups. Ships nationwide in discreet packaging.",
      es: "Toallas de tela y ropa interior menstrual cosidas en Ciudad de Panamá, además de copas menstruales. Envíos a todo el país en empaque discreto."
    },
    location: { place: "panama-city", label: "Panama City", lat: 8.9700, lng: -79.5400 },
    categories: ["intimate"],
    products: ["cloth-pads", "period-underwear", "cup"],
    retail: [
      { name: "Luna Roja studio (by appointment)", label: "Panama City", lat: 8.9700, lng: -79.5400 },
      { name: "Casco Viejo artisan market", label: "Panama City", lat: 8.9520, lng: -79.5340 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000015" },
    tone: "#b56576",
    photos: [ { bg: "#b56576", icon: "🌙" }, { bg: "#e0c9a6", icon: "🧵" } ],
    featured: false
  },
  {
    id: "flor-de-luna",
    name: "Flor de Luna",
    tagline: { en: "Cloth pads from Chiriquí", es: "Toallas de tela de Chiriquí" },
    about: {
      en: "Hand-sewn cloth pads from a women's cooperative in David. Sold at markets in Chiriquí; shipping within Chiriquí.",
      es: "Toallas de tela cosidas a mano por una cooperativa de mujeres en David. Se venden en mercados de Chiriquí; envíos dentro de Chiriquí."
    },
    location: { place: "david", label: "David, Chiriquí", lat: 8.4400, lng: -82.4200 },
    categories: ["intimate"],
    products: ["cloth-pads"],
    retail: [
      { name: "Boquete Tuesday Market", label: "Boquete, Chiriquí", lat: 8.7810, lng: -82.4380 },
      { name: "Organic Corner David", label: "David, Chiriquí", lat: 8.4300, lng: -82.4300 }
    ],
    shipping: { type: "provinces", provinces: ["chiriqui"] },
    links: { whatsapp: "https://wa.me/50760000016" },
    tone: "#c98b8b",
    photos: [ { bg: "#c98b8b", icon: "🌸" }, { bg: "#a3b18a", icon: "🧵" } ],
    featured: false
  },
  {
    id: "casa-serena",
    name: "Casa Serena",
    tagline: { en: "Candles, bath salts and room sprays", es: "Velas, sales de baño y aromatizantes" },
    about: {
      en: "Soy candles, bath salts and room sprays scented with Panamanian botanicals. Made in Altos del María, shipped nationwide.",
      es: "Velas de soya, sales de baño y aromatizantes con botánicos panameños. Hechos en Altos del María, envíos a todo el país."
    },
    location: { place: "altos-del-maria", label: "Altos del María, Panamá Oeste", lat: 8.6200, lng: -80.0500 },
    categories: ["ritual", "living"],
    products: ["candle", "bath-salts", "room-spray", "incense"],
    retail: [
      { name: "Altos del María community shop", label: "Altos del María, Panamá Oeste", lat: 8.6200, lng: -80.0500 },
      { name: "Coronado Farmers Market (Sat)", label: "Coronado, Panamá Oeste", lat: 8.5200, lng: -79.8850 },
      { name: "El Valle Sunday market", label: "El Valle de Antón, Coclé", lat: 8.6010, lng: -80.1260 }
    ],
    shipping: { type: "nationwide" },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000017" },
    tone: "#bfa08a",
    photos: [ { bg: "#bfa08a", icon: "🕯️" }, { bg: "#e0c9a6", icon: "🛁" } ],
    featured: true
  },
  {
    id: "nudos-y-fibras",
    name: "Nudos y Fibras",
    tagline: { en: "Macramé and woven baskets", es: "Macramé y canastas tejidas" },
    about: {
      en: "Macramé wall hangings and baskets woven from natural fibers by artisans in Santa Fe, Veraguas. Ships nationwide.",
      es: "Tapices de macramé y canastas tejidas con fibras naturales por artesanas de Santa Fe, Veraguas. Envíos a todo el país."
    },
    location: { place: "santa-fe", label: "Santa Fe, Veraguas", lat: 8.5100, lng: -81.0800 },
    categories: ["living"],
    products: ["macrame", "basket", "hammock"],
    retail: [
      { name: "Santa Fe artisan cooperative", label: "Santa Fe, Veraguas", lat: 8.5100, lng: -81.0800 },
      { name: "Santiago craft fair", label: "Santiago, Veraguas", lat: 8.1000, lng: -80.9830 },
      { name: "Casco Viejo artisan market", label: "Panama City", lat: 8.9520, lng: -79.5340 }
    ],
    shipping: { type: "nationwide" },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000018" },
    tone: "#c9a66b",
    photos: [ { bg: "#c9a66b", icon: "🧶" }, { bg: "#8a9a5b", icon: "🧺" } ],
    featured: false
  },
  {
    id: "taller-madera-viva",
    name: "Taller Madera Viva",
    tagline: { en: "Furniture and boards from reclaimed wood", es: "Muebles y tablas de madera recuperada" },
    about: {
      en: "Handmade furniture, cutting boards and wooden toys from reclaimed teak and cedar. Workshop in Pedasí; furniture delivered within Los Santos and Herrera.",
      es: "Muebles, tablas y juguetes de madera hechos a mano con teca y cedro recuperados. Taller en Pedasí; muebles entregados en Los Santos y Herrera."
    },
    location: { place: "pedasi", label: "Pedasí, Los Santos", lat: 7.5300, lng: -80.0350 },
    categories: ["living", "kids"],
    products: ["furniture", "cutting-board", "wooden-toys"],
    retail: [
      { name: "Workshop showroom", label: "Pedasí, Los Santos", lat: 7.5300, lng: -80.0350 },
      { name: "Chitré design shop", label: "Chitré, Herrera", lat: 7.9610, lng: -80.4290 }
    ],
    shipping: { type: "provinces", provinces: ["los-santos", "herrera"] },
    links: { instagram: "https://instagram.com/", whatsapp: "https://wa.me/50760000019" },
    tone: "#8b5e3c",
    photos: [ { bg: "#8b5e3c", icon: "🪵" }, { bg: "#c9a66b", icon: "🪑" } ],
    featured: false
  },
  {
    id: "ceramica-portobelo",
    name: "Cerámica Portobelo",
    tagline: { en: "Stoneware mugs from the Caribbean coast", es: "Tazas de gres de la costa caribeña" },
    about: {
      en: "Wheel-thrown mugs and bowls glazed in sea tones. Studio in Portobelo; sold in Colón and Panama City, shipped nationwide.",
      es: "Tazas y cuencos torneados con esmaltes en tonos de mar. Taller en Portobelo; se venden en Colón y Ciudad de Panamá, envíos a todo el país."
    },
    location: { place: "portobelo", label: "Portobelo, Colón", lat: 9.5540, lng: -79.6560 },
    categories: ["living"],
    products: ["ceramic-mug"],
    retail: [
      { name: "Studio, Portobelo", label: "Portobelo, Colón", lat: 9.5540, lng: -79.6560 },
      { name: "Casco Viejo artisan market", label: "Panama City", lat: 8.9520, lng: -79.5340 }
    ],
    shipping: { type: "nationwide" },
    links: { instagram: "https://instagram.com/" },
    tone: "#4f8a8b",
    photos: [ { bg: "#4f8a8b", icon: "☕" }, { bg: "#e0c9a6", icon: "🏺" } ],
    featured: false
  },
  {
    id: "pequenos-pasos",
    name: "Pequeños Pasos",
    tagline: { en: "Organic cotton clothing for little ones", es: "Ropa de algodón orgánico para los más pequeños" },
    about: {
      en: "Children's clothing sewn in Panama City from organic cotton, plus a calendula baby balm. Ships nationwide.",
      es: "Ropa infantil cosida en Ciudad de Panamá con algodón orgánico, además de un bálsamo de caléndula para bebé. Envíos a todo el país."
    },
    location: { place: "panama-city", label: "Panama City", lat: 8.9800, lng: -79.5300 },
    categories: ["kids", "skincare"],
    products: ["kids-clothing", "baby-balm"],
    retail: [
      { name: "Mercado Urbano, Obarrio", label: "Panama City", lat: 8.9860, lng: -79.5200 },
      { name: "Coronado Farmers Market (Sat)", label: "Coronado, Panamá Oeste", lat: 8.5200, lng: -79.8850 }
    ],
    shipping: { type: "nationwide" },
    links: { website: "https://example.com", instagram: "https://instagram.com/" },
    tone: "#e8b4a8",
    photos: [ { bg: "#e8b4a8", icon: "🧸" }, { bg: "#a3b18a", icon: "👕" } ],
    featured: false
  },
  {
    id: "coco-y-miel",
    name: "Coco y Miel",
    tagline: { en: "Coconut oil and honey from Las Lajas", es: "Aceite de coco y miel de Las Lajas" },
    about: {
      en: "Cold-pressed coconut oil and raw honey from a beach farm in Las Lajas. Sold locally and in David; shipped within Chiriquí and Veraguas.",
      es: "Aceite de coco prensado en frío y miel cruda de una finca de playa en Las Lajas. Se vende localmente y en David; envíos dentro de Chiriquí y Veraguas."
    },
    location: { place: "las-lajas", label: "Las Lajas, Chiriquí", lat: 8.2500, lng: -81.8700 },
    categories: ["food", "skincare"],
    products: ["coconut-oil", "honey", "soap"],
    retail: [
      { name: "Farm stand, Las Lajas beach road", label: "Las Lajas, Chiriquí", lat: 8.2500, lng: -81.8700 },
      { name: "Organic Corner David", label: "David, Chiriquí", lat: 8.4300, lng: -82.4300 }
    ],
    shipping: { type: "provinces", provinces: ["chiriqui", "veraguas"] },
    links: { whatsapp: "https://wa.me/50760000021" },
    tone: "#d9b382",
    photos: [ { bg: "#d9b382", icon: "🥥" }, { bg: "#c9a66b", icon: "🍯" } ],
    featured: false
  }
];

// Mission / About page content. Editable without touching app code.
AQUI.mission = {
  teaser: { en: "supporting local", es: "apoyando lo local" },
  teaserLink: { en: "Learn more about our mission", es: "Conoce más sobre nuestra misión" },
  title: { en: "Our mission", es: "Nuestra misión" },
  body: {
    en: [
      "Many wonderful products and small brands already exist in Panama. They are simply hard to find: scattered across Instagram, WhatsApp groups, weekend markets and word of mouth.",
      "aquí brings them together in one place. We answer two questions: what is available, and where or how can I get it?",
      "We are not a marketplace. Nothing is sold through aquí. Once you find a brand, we send you straight to them: their website, their Instagram, their WhatsApp, or the shop down the road.",
      "Every brand on aquí is chosen by hand. Being made in Panama is the starting point, not the whole story. We look for care, craft and honest ingredients."
    ],
    es: [
      "En Panamá ya existen muchos productos maravillosos y marcas pequeñas. Simplemente son difíciles de encontrar: dispersos en Instagram, grupos de WhatsApp, ferias de fin de semana y recomendaciones.",
      "aquí los reúne en un solo lugar. Respondemos dos preguntas: ¿qué hay disponible? y ¿dónde o cómo lo consigo?",
      "No somos un marketplace. Nada se vende a través de aquí. Cuando encuentras una marca, te enviamos directo a ella: su sitio web, su Instagram, su WhatsApp o la tienda de la esquina.",
      "Cada marca en aquí se elige a mano. Ser hecho en Panamá es el punto de partida, no toda la historia. Buscamos cuidado, oficio e ingredientes honestos."
    ]
  }
};
