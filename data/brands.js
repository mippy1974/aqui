/* aquí - brands. The brand is the central public entity in the app.

   Shape of one brand:
     slug        url id
     name        display name, same in both languages
     tagline     one line, en / es
     about       About section, en / es
     categories  one or more category ids from data/categories.js
     products    product ids from data/products.js (many to many)
     base        where the brand is based or produces. NOT used for radius search.
     pos         retail points of sale. THESE are what the radius search uses.
                 each has a shop name, a town, and its own coordinates.
     shipping    { type: 'nationwide' | 'provinces' | 'none', provinces: [...] }
     links       website, instagram, whatsapp

   Photos: this demo uses generated tiles instead of stock images, so nothing
   here claims to be a real brand. Swap `photo` in for a real path later. */

window.BRANDS = [
  {
    slug: "fermentos-del-istmo",
    name: "Fermentos del Istmo",
    tagline: { en: "Small batch ferments from Panama City", es: "Fermentos artesanales de Ciudad de Panamá" },
    about: { en: "A two person fermentation kitchen in Casco Antiguo. Everything is made in small batches with vegetables bought the same week from growers in Cerro Punta and Coclé. Jars are returnable.",
             es: "Una cocina de fermentación de dos personas en el Casco Antiguo. Todo se elabora en lotes pequeños con vegetales comprados la misma semana a productores de Cerro Punta y Coclé. Los frascos son retornables." },
    categories: ["food"],
    products: ["kimchi", "kombucha", "sauerkraut", "water-kefir"],
    base: { town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9824, lng: -79.5199 },
    pos: [
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9784, lng: -79.5239 },
      { name: "Feria de El Valle", town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.6, lng: -80.1333 },
      { name: "Tienda Natural Penonomé", town: "Penonomé", townEs: "Penonomé", province: "Coclé", lat: 8.5207, lng: -80.346 }
    ],
    shipping: { type: "provinces", provinces: ["Panamá", "Panamá Oeste", "Coclé"] },
    links: { website: "fermentosdelistmo.com", instagram: "fermentosdelistmo", whatsapp: "+507 6100 0101" },
    published: true
  },
  {
    slug: "fermentos-azuero",
    name: "Fermentos Azuero",
    tagline: { en: "Ferments and kombucha from Herrera", es: "Fermentos y kombucha de Herrera" },
    about: { en: "Started as a home project during the rainy season and grew into a small production room behind the family house in Chitré. Deliveries go out twice a week by bus to the interior.",
             es: "Comenzó como un proyecto casero en la temporada de lluvias y creció hasta convertirse en una pequeña sala de producción detrás de la casa familiar en Chitré. Los envíos salen dos veces por semana en bus hacia el interior." },
    categories: ["food"],
    products: ["kimchi", "sauerkraut", "kombucha"],
    base: { town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9667, lng: -80.4333 },
    pos: [
      { name: "Súper Natural Chitré", town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9627, lng: -80.4373 },
      { name: "Feria de Las Tablas", town: "Las Tablas", townEs: "Las Tablas", province: "Los Santos", lat: 7.7667, lng: -80.2833 }
    ],
    shipping: { type: "provinces", provinces: ["Herrera", "Los Santos", "Coclé", "Veraguas"] },
    links: { website: "", instagram: "fermentosazuero", whatsapp: "+507 6100 0102" },
    published: true
  },
  {
    slug: "kimchi-volcan",
    name: "Kimchi Volcán",
    tagline: { en: "Highland kimchi and chili ferments", es: "Kimchi y fermentos de chile de tierras altas" },
    about: { en: "Cabbage, radish and chili grown at 1,600 metres in Volcán. The cool air lets the ferment go slowly, which is where the flavour comes from. Sold only in Chiriquí for now.",
             es: "Repollo, rábano y chile cultivados a 1,600 metros en Volcán. El aire frío permite una fermentación lenta, y de ahí viene el sabor. Por ahora se vende solo en Chiriquí." },
    categories: ["food"],
    products: ["kimchi", "sauerkraut", "hot-sauce"],
    base: { town: "Volcán", townEs: "Volcán", province: "Chiriquí", lat: 8.7833, lng: -82.6333 },
    pos: [
      { name: "Mercado de Volcán", town: "Volcán", townEs: "Volcán", province: "Chiriquí", lat: 8.7793, lng: -82.6373 },
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.78, lng: -82.44 },
      { name: "Orgánica David", town: "David", townEs: "David", province: "Chiriquí", lat: 8.4373, lng: -82.4293 }
    ],
    shipping: { type: "provinces", provinces: ["Chiriquí"] },
    links: { website: "", instagram: "kimchivolcan", whatsapp: "+507 6100 0103" },
    published: true
  },
  {
    slug: "masa-madre-boquete",
    name: "Masa Madre Boquete",
    tagline: { en: "Sourdough baked the same morning", es: "Masa madre horneada la misma mañana" },
    about: { en: "A wood fired oven above the Caldera road. The starter has been going since 2019. Loaves come out Thursday and Saturday and are usually gone by ten.",
             es: "Un horno de leña sobre el camino a Caldera. La masa madre vive desde 2019. Los panes salen jueves y sábado, y normalmente se agotan antes de las diez." },
    categories: ["food"],
    products: ["sourdough", "granola"],
    base: { town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.78, lng: -82.44 },
    pos: [
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.776, lng: -82.444 },
      { name: "Café Central David", town: "David", townEs: "David", province: "Chiriquí", lat: 8.4333, lng: -82.4333 }
    ],
    shipping: { type: "none", provinces: [] },
    links: { website: "", instagram: "masamadreboquete", whatsapp: "+507 6100 0104" },
    published: true
  },
  {
    slug: "cacao-portobelo",
    name: "Cacao Portobelo",
    tagline: { en: "Bean to bar cacao from the Caribbean coast", es: "Cacao de grano a barra de la costa caribeña" },
    about: { en: "Cacao is fermented and dried on the coast, then stone ground in Portobelo. The bars carry the name of the farm they came from.",
             es: "El cacao se fermenta y se seca en la costa, y luego se muele en piedra en Portobelo. Cada barra lleva el nombre de la finca de origen." },
    categories: ["food"],
    products: ["cacao-nibs", "chocolate-bar", "cacao-paste"],
    base: { town: "Portobelo", townEs: "Portobelo", province: "Colón", lat: 9.55, lng: -79.65 },
    pos: [
      { name: "Taller Portobelo", town: "Portobelo", townEs: "Portobelo", province: "Colón", lat: 9.546, lng: -79.654 },
      { name: "Mercado Colón", town: "Colón", townEs: "Colón", province: "Colón", lat: 9.3592, lng: -79.9014 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9864, lng: -79.5159 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "cacaoportobelo.com", instagram: "cacaoportobelo", whatsapp: "+507 6100 0105" },
    published: true
  },
  {
    slug: "miel-de-azuero",
    name: "Miel de Azuero",
    tagline: { en: "Raw honey and beeswax from Los Santos", es: "Miel cruda y cera de abeja de Los Santos" },
    about: { en: "Hives sit in the dry forest near Pedasí. Honey is never heated, so it sets firm in the cooler months. Wax left over from harvest becomes candles.",
             es: "Las colmenas están en el bosque seco cerca de Pedasí. La miel nunca se calienta, por eso se cristaliza en los meses más frescos. La cera que sobra de la cosecha se convierte en velas." },
    categories: ["food", "ritual"],
    products: ["raw-honey", "beeswax-candle"],
    base: { town: "Pedasí", townEs: "Pedasí", province: "Los Santos", lat: 7.5333, lng: -80.0333 },
    pos: [
      { name: "Tienda del Pueblo Pedasí", town: "Pedasí", townEs: "Pedasí", province: "Los Santos", lat: 7.5293, lng: -80.0373 },
      { name: "Feria de Las Tablas", town: "Las Tablas", townEs: "Las Tablas", province: "Los Santos", lat: 7.7667, lng: -80.2833 },
      { name: "Súper Natural Chitré", town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9707, lng: -80.4293 }
    ],
    shipping: { type: "provinces", provinces: ["Los Santos", "Herrera", "Panamá"] },
    links: { website: "", instagram: "mieldeazuero", whatsapp: "+507 6100 0106" },
    published: true
  },
  {
    slug: "cafe-alto-quiel",
    name: "Café Alto Quiel",
    tagline: { en: "Single farm coffee, roasted to order", es: "Café de una sola finca, tostado por encargo" },
    about: { en: "Two hectares above Alto Quiel, picked by hand over four passes. Roasting happens on Mondays and the bags are dated, not stamped with a best before.",
             es: "Dos hectáreas sobre Alto Quiel, cosechadas a mano en cuatro pasadas. El tueste es los lunes y las bolsas llevan fecha de tostado, no fecha de vencimiento." },
    categories: ["food"],
    products: ["coffee"],
    base: { town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.78, lng: -82.44 },
    pos: [
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.776, lng: -82.444 },
      { name: "Café Central David", town: "David", townEs: "David", province: "Chiriquí", lat: 8.4333, lng: -82.4333 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9864, lng: -79.5159 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "altoquiel.com", instagram: "cafealtoquiel", whatsapp: "+507 6100 0107" },
    published: true
  },
  {
    slug: "kombucha-tropical",
    name: "Kombucha Tropical",
    tagline: { en: "Kombucha and water kefir brewed in La Chorrera", es: "Kombucha y kéfir de agua elaborados en La Chorrera" },
    about: { en: "Flavoured with whatever is in season along the Pacific coast: nance, guanábana, tamarind, ginger. Bottles are glass and come back for refill at the markets.",
             es: "Saborizada con lo que está en temporada en la costa del Pacífico: nance, guanábana, tamarindo, jengibre. Las botellas son de vidrio y regresan para rellenar en las ferias." },
    categories: ["food"],
    products: ["kombucha", "water-kefir"],
    base: { town: "La Chorrera", townEs: "La Chorrera", province: "Panamá Oeste", lat: 8.88, lng: -79.7833 },
    pos: [
      { name: "Feria La Chorrera", town: "La Chorrera", townEs: "La Chorrera", province: "Panamá Oeste", lat: 8.876, lng: -79.7873 },
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 },
      { name: "Gorgona Beach Store", town: "Gorgona", townEs: "Gorgona", province: "Panamá Oeste", lat: 8.554, lng: -79.8793 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9784, lng: -79.5239 }
    ],
    shipping: { type: "provinces", provinces: ["Panamá", "Panamá Oeste"] },
    links: { website: "", instagram: "kombuchatropicalpa", whatsapp: "+507 6100 0108" },
    published: true
  },
  {
    slug: "nueces-del-pacifico",
    name: "Nueces del Pacífico",
    tagline: { en: "Nut butters and granola from Coclé", es: "Mantequillas de nueces y granola de Coclé" },
    about: { en: "Cashews from Aguadulce, roasted low and ground long so nothing else has to be added. The granola uses honey from the same province.",
             es: "Marañón de Aguadulce, tostado a baja temperatura y molido por largo rato para no tener que agregar nada más. La granola usa miel de la misma provincia." },
    categories: ["food"],
    products: ["nut-butter", "granola"],
    base: { town: "Aguadulce", townEs: "Aguadulce", province: "Coclé", lat: 8.25, lng: -80.55 },
    pos: [
      { name: "Mercado Aguadulce", town: "Aguadulce", townEs: "Aguadulce", province: "Coclé", lat: 8.246, lng: -80.554 },
      { name: "Tienda Natural Penonomé", town: "Penonomé", townEs: "Penonomé", province: "Coclé", lat: 8.5167, lng: -80.35 },
      { name: "Orgánico Santiago", town: "Santiago", townEs: "Santiago", province: "Veraguas", lat: 8.104, lng: -80.9793 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "", instagram: "nuecesdelpacifico", whatsapp: "+507 6100 0109" },
    published: true
  },
  {
    slug: "salsa-islena",
    name: "Salsa Isleña",
    tagline: { en: "Island hot sauce and coconut yogurt", es: "Salsa picante isleña y yogur de coco" },
    about: { en: "Made on Isla Colón with scotch bonnet peppers grown on the island and coconut pressed the same day. Small runs, often sold out.",
             es: "Elaborada en Isla Colón con ají chombo cultivado en la isla y coco prensado el mismo día. Producción pequeña, a menudo agotada." },
    categories: ["food"],
    products: ["hot-sauce", "coconut-yogurt"],
    base: { town: "Bocas del Toro", townEs: "Bocas del Toro", province: "Bocas del Toro", lat: 9.34, lng: -82.24 },
    pos: [
      { name: "Bocas Town Market", town: "Bocas del Toro", townEs: "Bocas del Toro", province: "Bocas del Toro", lat: 9.336, lng: -82.244 },
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.78, lng: -82.44 }
    ],
    shipping: { type: "provinces", provinces: ["Bocas del Toro", "Chiriquí"] },
    links: { website: "", instagram: "salsaislena", whatsapp: "+507 6100 0110" },
    published: true
  },
  {
    slug: "jardin-de-santa-fe",
    name: "Jardín de Santa Fe",
    tagline: { en: "Garden teas and honey from Veraguas", es: "Tés de jardín y miel de Veraguas" },
    about: { en: "A hillside garden above Santa Fe where hibiscus and lemongrass grow beside the beehives. Everything is cut, dried and packed by the same three people.",
             es: "Un jardín en la ladera sobre Santa Fe donde la flor de Jamaica y la hierba limón crecen junto a las colmenas. Todo lo cortan, secan y empacan las mismas tres personas." },
    categories: ["herbs", "food"],
    products: ["hibiscus-tea", "lemongrass-tea", "raw-honey"],
    base: { town: "Santa Fe", townEs: "Santa Fe", province: "Veraguas", lat: 8.5167, lng: -81.0833 },
    pos: [
      { name: "Feria Santa Fe", town: "Santa Fe", townEs: "Santa Fe", province: "Veraguas", lat: 8.5127, lng: -81.0873 },
      { name: "Orgánico Santiago", town: "Santiago", townEs: "Santiago", province: "Veraguas", lat: 8.1, lng: -80.9833 }
    ],
    shipping: { type: "provinces", provinces: ["Veraguas", "Herrera", "Coclé"] },
    links: { website: "", instagram: "jardindesantafe", whatsapp: "+507 6100 0111" },
    published: true
  },
  {
    slug: "hierbas-cerro-punta",
    name: "Hierbas de Cerro Punta",
    tagline: { en: "Highland herbs, dried and blended", es: "Hierbas de altura, secas y mezcladas" },
    about: { en: "Grown between 1,800 and 2,000 metres where the nights are cold. Herbs are shade dried rather than heat dried, which keeps the colour and the oils.",
             es: "Cultivadas entre 1,800 y 2,000 metros, donde las noches son frías. Las hierbas se secan a la sombra y no con calor, lo que conserva el color y los aceites." },
    categories: ["herbs"],
    products: ["herbal-tea", "lemongrass-tea", "moringa", "turmeric"],
    base: { town: "Cerro Punta", townEs: "Cerro Punta", province: "Chiriquí", lat: 8.85, lng: -82.5833 },
    pos: [
      { name: "Mercado Cerro Punta", town: "Cerro Punta", townEs: "Cerro Punta", province: "Chiriquí", lat: 8.846, lng: -82.5873 },
      { name: "Mercado de Volcán", town: "Volcán", townEs: "Volcán", province: "Chiriquí", lat: 8.7833, lng: -82.6333 },
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.784, lng: -82.436 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "hierbascerropunta.com", instagram: "hierbascerropunta", whatsapp: "+507 6100 0112" },
    published: true
  },
  {
    slug: "botica-verde",
    name: "Botica Verde",
    tagline: { en: "Tinctures, syrups and essential oils", es: "Tinturas, jarabes y aceites esenciales" },
    about: { en: "A herbalist practice in San Francisco that began making its own preparations because nothing on the shelf matched what the clients needed. Batch numbers are on every bottle.",
             es: "Una práctica de herbolaria en San Francisco que empezó a hacer sus propias preparaciones porque nada en el estante coincidía con lo que necesitaban sus clientes. Cada frasco lleva número de lote." },
    categories: ["herbs"],
    products: ["tincture", "elderberry", "essential-oil", "hibiscus-tea"],
    base: { town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9824, lng: -79.5199 },
    pos: [
      { name: "Botica Verde San Francisco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9784, lng: -79.5239 },
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "boticaverde.com", instagram: "boticaverdepa", whatsapp: "+507 6100 0113" },
    published: true
  },
  {
    slug: "selva-botanica",
    name: "Selva Botánica",
    tagline: { en: "Face and body care made in El Valle", es: "Cuidado facial y corporal hecho en El Valle" },
    about: { en: "Formulated in a small lab beside the crater. Short ingredient lists, glass packaging, and every batch tested on the founder first.",
             es: "Formulado en un pequeño laboratorio junto al cráter. Listas de ingredientes cortas, envases de vidrio, y cada lote probado primero por la fundadora." },
    categories: ["skincare"],
    products: ["face-serum", "cleanser", "body-oil", "lip-balm"],
    base: { town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.6, lng: -80.1333 },
    pos: [
      { name: "Feria de El Valle", town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.596, lng: -80.1373 },
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9864, lng: -79.5159 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "selvabotanica.com", instagram: "selvabotanica", whatsapp: "+507 6100 0114" },
    published: true
  },
  {
    slug: "jaboneria-istmo",
    name: "Jabonería Istmo",
    tagline: { en: "Cold process soap and solid hair care", es: "Jabón en frío y cuidado capilar sólido" },
    about: { en: "Cured for six weeks in Chitré before it leaves the workshop. Oils are coconut, palm free, and the scent comes from essential oils only.",
             es: "Curado durante seis semanas en Chitré antes de salir del taller. Los aceites son de coco, sin palma, y el aroma viene solo de aceites esenciales." },
    categories: ["skincare"],
    products: ["soap", "shampoo-bar", "conditioner-bar"],
    base: { town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9667, lng: -80.4333 },
    pos: [
      { name: "Súper Natural Chitré", town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9627, lng: -80.4373 },
      { name: "Feria de Las Tablas", town: "Las Tablas", townEs: "Las Tablas", province: "Los Santos", lat: 7.7667, lng: -80.2833 },
      { name: "Orgánico Santiago", town: "Santiago", townEs: "Santiago", province: "Veraguas", lat: 8.104, lng: -80.9793 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "", instagram: "jaboneriaistmo", whatsapp: "+507 6100 0115" },
    published: true
  },
  {
    slug: "coco-y-cera",
    name: "Coco y Cera",
    tagline: { en: "Coconut based balms and mineral sunscreen", es: "Bálsamos de coco y protector solar mineral" },
    about: { en: "Made on Isla Colón with coconut oil pressed on the archipelago. The sunscreen uses non nano zinc and is reef safe, which matters here.",
             es: "Elaborado en Isla Colón con aceite de coco prensado en el archipiélago. El protector solar usa zinc no nano y es seguro para el arrecife, algo que aquí importa." },
    categories: ["skincare"],
    products: ["body-butter", "lip-balm", "deodorant", "sunscreen"],
    base: { town: "Bocas del Toro", townEs: "Bocas del Toro", province: "Bocas del Toro", lat: 9.34, lng: -82.24 },
    pos: [
      { name: "Bocas Town Market", town: "Bocas del Toro", townEs: "Bocas del Toro", province: "Bocas del Toro", lat: 9.336, lng: -82.244 },
      { name: "Mercado Colón", town: "Colón", townEs: "Colón", province: "Colón", lat: 9.3592, lng: -79.9014 }
    ],
    shipping: { type: "provinces", provinces: ["Bocas del Toro", "Chiriquí", "Panamá"] },
    links: { website: "cocoycera.com", instagram: "cocoycera", whatsapp: "+507 6100 0116" },
    published: true
  },
  {
    slug: "raiz-natural",
    name: "Raíz Natural",
    tagline: { en: "Everyday natural care from David", es: "Cuidado natural diario desde David" },
    about: { en: "Simple daily products at a price people in Chiriquí can actually pay. Refills cost less than the first jar, which is the whole point.",
             es: "Productos diarios sencillos a un precio que la gente en Chiriquí realmente puede pagar. Los rellenos cuestan menos que el primer frasco, y esa es la idea." },
    categories: ["skincare", "menstrual"],
    products: ["deodorant", "intimate-wash", "soap"],
    base: { town: "David", townEs: "David", province: "Chiriquí", lat: 8.4333, lng: -82.4333 },
    pos: [
      { name: "Orgánica David", town: "David", townEs: "David", province: "Chiriquí", lat: 8.4293, lng: -82.4373 },
      { name: "Tuesday Market Boquete", town: "Boquete", townEs: "Boquete", province: "Chiriquí", lat: 8.78, lng: -82.44 },
      { name: "Mercado de Volcán", town: "Volcán", townEs: "Volcán", province: "Chiriquí", lat: 8.7873, lng: -82.6293 }
    ],
    shipping: { type: "provinces", provinces: ["Chiriquí", "Bocas del Toro"] },
    links: { website: "", instagram: "raiznaturalpa", whatsapp: "+507 6100 0117" },
    published: true
  },
  {
    slug: "luna-roja",
    name: "Luna Roja",
    tagline: { en: "Reusable period care", es: "Cuidado menstrual reutilizable" },
    about: { en: "Cups, cloth pads and period underwear, with a sizing guide written in plain Spanish. Runs free workshops in schools twice a year.",
             es: "Copas, toallas de tela y ropa interior menstrual, con una guía de tallas escrita en español sencillo. Ofrece talleres gratuitos en escuelas dos veces al año." },
    categories: ["menstrual"],
    products: ["menstrual-cup", "cloth-pads", "period-underwear"],
    base: { town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9824, lng: -79.5199 },
    pos: [
      { name: "Botica Verde San Francisco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9784, lng: -79.5239 },
      { name: "Feria La Chorrera", town: "La Chorrera", townEs: "La Chorrera", province: "Panamá Oeste", lat: 8.88, lng: -79.7833 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "lunaroja.com.pa", instagram: "lunarojapa", whatsapp: "+507 6100 0118" },
    published: true
  },
  {
    slug: "ciclo-panama",
    name: "Ciclo Panamá",
    tagline: { en: "Cloth pads sewn in Veraguas", es: "Toallas de tela cosidas en Veraguas" },
    about: { en: "A sewing cooperative of nine women in Santiago. Cotton is bought locally and the offcuts become the small pouches each set ships in.",
             es: "Una cooperativa de costura de nueve mujeres en Santiago. El algodón se compra localmente y los retazos se convierten en las bolsitas en que viaja cada juego." },
    categories: ["menstrual"],
    products: ["cloth-pads", "period-underwear", "intimate-wash"],
    base: { town: "Santiago", townEs: "Santiago", province: "Veraguas", lat: 8.1, lng: -80.9833 },
    pos: [
      { name: "Orgánico Santiago", town: "Santiago", townEs: "Santiago", province: "Veraguas", lat: 8.096, lng: -80.9873 },
      { name: "Súper Natural Chitré", town: "Chitré", townEs: "Chitré", province: "Herrera", lat: 7.9667, lng: -80.4333 },
      { name: "Tienda Natural Penonomé", town: "Penonomé", townEs: "Penonomé", province: "Coclé", lat: 8.5207, lng: -80.346 }
    ],
    shipping: { type: "provinces", provinces: ["Veraguas", "Herrera", "Los Santos", "Coclé"] },
    links: { website: "", instagram: "ciclopanama", whatsapp: "+507 6100 0119" },
    published: true
  },
  {
    slug: "vela-y-copal",
    name: "Vela y Copal",
    tagline: { en: "Candles, incense and room sprays", es: "Velas, incienso y esprays de ambiente" },
    about: { en: "Poured in El Valle in small runs. Palo santo is bought only from suppliers who can show where the wood fell, never from cut trees.",
             es: "Vertidas en El Valle en tandas pequeñas. El palo santo se compra solo a proveedores que pueden mostrar dónde cayó la madera, nunca de árboles talados." },
    categories: ["ritual"],
    products: ["soy-candle", "incense", "palo-santo", "room-spray"],
    base: { town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.6, lng: -80.1333 },
    pos: [
      { name: "Feria de El Valle", town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.596, lng: -80.1373 },
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9864, lng: -79.5159 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "velaycopal.com", instagram: "velaycopal", whatsapp: "+507 6100 0120" },
    published: true
  },
  {
    slug: "casa-ambar",
    name: "Casa Ámbar",
    tagline: { en: "Beeswax candles and slow made home pieces", es: "Velas de cera de abeja y piezas de hogar hechas con calma" },
    about: { en: "A house in Pedasí that turned into a workshop. Candles in winter, ceramics when the kiln is free, and nothing made faster than it wants to be.",
             es: "Una casa en Pedasí que se convirtió en taller. Velas en invierno, cerámica cuando el horno está libre, y nada hecho más rápido de lo que pide." },
    categories: ["ritual", "living"],
    products: ["beeswax-candle", "room-spray", "ceramic-mug"],
    base: { town: "Pedasí", townEs: "Pedasí", province: "Los Santos", lat: 7.5333, lng: -80.0333 },
    pos: [
      { name: "Tienda del Pueblo Pedasí", town: "Pedasí", townEs: "Pedasí", province: "Los Santos", lat: 7.5293, lng: -80.0373 },
      { name: "Feria de Las Tablas", town: "Las Tablas", townEs: "Las Tablas", province: "Los Santos", lat: 7.7667, lng: -80.2833 }
    ],
    shipping: { type: "provinces", provinces: ["Los Santos", "Herrera", "Panamá"] },
    links: { website: "", instagram: "casaambarpedasi", whatsapp: "+507 6100 0121" },
    published: true
  },
  {
    slug: "taller-gorgona",
    name: "Taller Gorgona",
    tagline: { en: "Macramé, baskets and woven throws", es: "Macramé, canastas y mantas tejidas" },
    about: { en: "Knotted by hand a hundred metres from the beach. Cotton cord is undyed or coloured with plant dyes, so no two runs match exactly.",
             es: "Anudado a mano a cien metros de la playa. El cordón de algodón va sin teñir o con tintes vegetales, así que ninguna tanda es exactamente igual a otra." },
    categories: ["living"],
    products: ["macrame", "basket", "cotton-throw"],
    base: { town: "Gorgona", townEs: "Gorgona", province: "Panamá Oeste", lat: 8.55, lng: -79.8833 },
    pos: [
      { name: "Gorgona Beach Store", town: "Gorgona", townEs: "Gorgona", province: "Panamá Oeste", lat: 8.546, lng: -79.8873 },
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 },
      { name: "San Carlos Feria", town: "San Carlos", townEs: "San Carlos", province: "Panamá Oeste", lat: 8.4873, lng: -80.046 }
    ],
    shipping: { type: "provinces", provinces: ["Panamá Oeste", "Panamá", "Coclé"] },
    links: { website: "", instagram: "tallergorgona", whatsapp: "+507 6100 0122" },
    published: true
  },
  {
    slug: "madera-y-barro",
    name: "Madera y Barro",
    tagline: { en: "Wood and clay for the kitchen", es: "Madera y barro para la cocina" },
    about: { en: "Boards from fallen cedar and mugs thrown on a kick wheel in Penonomé. Pieces are signed underneath and can be repaired rather than replaced.",
             es: "Tablas de cedro caído y tazas torneadas en un torno de pie en Penonomé. Las piezas van firmadas por debajo y se pueden reparar en vez de reemplazar." },
    categories: ["living"],
    products: ["cutting-board", "ceramic-mug", "basket"],
    base: { town: "Penonomé", townEs: "Penonomé", province: "Coclé", lat: 8.5167, lng: -80.35 },
    pos: [
      { name: "Tienda Natural Penonomé", town: "Penonomé", townEs: "Penonomé", province: "Coclé", lat: 8.5127, lng: -80.354 },
      { name: "Mercado Aguadulce", town: "Aguadulce", townEs: "Aguadulce", province: "Coclé", lat: 8.25, lng: -80.55 },
      { name: "Feria de El Valle", town: "El Valle de Antón", townEs: "El Valle de Antón", province: "Coclé", lat: 8.604, lng: -80.1293 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "maderaybarro.com", instagram: "maderaybarro", whatsapp: "+507 6100 0123" },
    published: true
  },
  {
    slug: "pequeno-istmo",
    name: "Pequeño Istmo",
    tagline: { en: "Gentle care and play things for small people", es: "Cuidado suave y juguetes para los más pequeños" },
    about: { en: "Started when the founder could not find a balm for her own baby that she was willing to use. Clothing is cotton, toys are untreated wood, nothing is scented.",
             es: "Nació cuando la fundadora no encontró un bálsamo para su propio bebé que estuviera dispuesta a usar. La ropa es de algodón, los juguetes de madera sin tratar, y nada lleva perfume." },
    categories: ["kids", "skincare"],
    products: ["baby-balm", "kids-clothing", "cloth-diapers", "wooden-toy"],
    base: { town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5333, lng: -79.95 },
    pos: [
      { name: "Coronado Market", town: "Coronado", townEs: "Coronado", province: "Panamá Oeste", lat: 8.5293, lng: -79.954 },
      { name: "Gorgona Beach Store", town: "Gorgona", townEs: "Gorgona", province: "Panamá Oeste", lat: 8.55, lng: -79.8833 },
      { name: "Mercado Orgánico Casco", town: "Panama City", townEs: "Ciudad de Panamá", province: "Panamá", lat: 8.9864, lng: -79.5159 }
    ],
    shipping: { type: "nationwide", provinces: [] },
    links: { website: "pequenoistmo.com", instagram: "pequenoistmo", whatsapp: "+507 6100 0124" },
    published: true
  },
];
