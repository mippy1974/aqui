// Central product list. One record per product, with an English and a Spanish name.
// Brands reference products by id, so the same product can belong to many brands
// and a brand can offer many products (many-to-many).
window.AQUI = window.AQUI || {};
AQUI.products = [
  // Healthy food & drinks
  { id: "kimchi",        en: "Kimchi",                es: "Kimchi" },
  { id: "kombucha",      en: "Kombucha",              es: "Kombucha" },
  { id: "sauerkraut",    en: "Sauerkraut",            es: "Chucrut" },
  { id: "sourdough",     en: "Sourdough Bread",       es: "Pan de masa madre" },
  { id: "granola",       en: "Granola",               es: "Granola" },
  { id: "cacao-nibs",    en: "Cacao Nibs",            es: "Nibs de cacao" },
  { id: "chocolate",     en: "Artisan Chocolate",     es: "Chocolate artesanal" },
  { id: "coffee",        en: "Specialty Coffee",      es: "Café de especialidad" },
  { id: "honey",         en: "Raw Honey",             es: "Miel cruda" },
  { id: "hot-sauce",     en: "Hot Sauce",             es: "Salsa picante" },
  { id: "peanut-butter", en: "Peanut Butter",         es: "Mantequilla de maní" },
  { id: "coconut-oil",   en: "Coconut Oil",           es: "Aceite de coco" },
  { id: "jam",           en: "Fruit Jam",             es: "Mermelada de frutas" },
  { id: "cheese",        en: "Artisan Cheese",        es: "Queso artesanal" },
  { id: "turmeric",      en: "Turmeric Paste",        es: "Pasta de cúrcuma" },

  // Herbs, tea & remedies
  { id: "herbal-tea",    en: "Herbal Tea",            es: "Té de hierbas" },
  { id: "tincture",      en: "Herbal Tincture",       es: "Tintura herbal" },
  { id: "moringa",       en: "Moringa Powder",        es: "Moringa en polvo" },
  { id: "salve",         en: "Healing Salve",         es: "Ungüento curativo" },
  { id: "elderberry",    en: "Elderberry Syrup",      es: "Jarabe de saúco" },

  // Skincare & bodycare
  { id: "soap",          en: "Natural Soap",          es: "Jabón natural" },
  { id: "face-oil",      en: "Face Oil",              es: "Aceite facial" },
  { id: "face-cream",    en: "Face Cream",            es: "Crema facial" },
  { id: "body-scrub",    en: "Body Scrub",            es: "Exfoliante corporal" },
  { id: "deodorant",     en: "Natural Deodorant",     es: "Desodorante natural" },
  { id: "shampoo-bar",   en: "Shampoo Bar",           es: "Champú sólido" },
  { id: "lip-balm",      en: "Lip Balm",              es: "Bálsamo labial" },
  { id: "sunscreen",     en: "Mineral Sunscreen",     es: "Protector solar mineral" },
  { id: "hair-oil",      en: "Hair Oil",              es: "Aceite capilar" },

  // Menstrual & intimate
  { id: "cloth-pads",    en: "Reusable Cloth Pads",   es: "Toallas de tela reutilizables" },
  { id: "cup",           en: "Menstrual Cup",         es: "Copa menstrual" },
  { id: "period-underwear", en: "Period Underwear",   es: "Ropa interior menstrual" },

  // Home, ritual & wellbeing
  { id: "candle",        en: "Soy Candle",            es: "Vela de soya" },
  { id: "incense",       en: "Herbal Incense",        es: "Incienso de hierbas" },
  { id: "bath-salts",    en: "Bath Salts",            es: "Sales de baño" },
  { id: "room-spray",    en: "Room Spray",            es: "Aromatizante de ambiente" },

  // Home & living
  { id: "macrame",       en: "Macramé Wall Hanging",  es: "Tapiz de macramé" },
  { id: "basket",        en: "Woven Basket",          es: "Canasta tejida" },
  { id: "ceramic-mug",   en: "Ceramic Mug",           es: "Taza de cerámica" },
  { id: "cutting-board", en: "Wooden Cutting Board",  es: "Tabla de madera" },
  { id: "furniture",     en: "Handmade Furniture",    es: "Muebles hechos a mano" },
  { id: "hammock",       en: "Hammock",               es: "Hamaca" },

  // Kids & family
  { id: "kids-clothing", en: "Children's Clothing",   es: "Ropa infantil" },
  { id: "wooden-toys",   en: "Wooden Toys",           es: "Juguetes de madera" },
  { id: "baby-balm",     en: "Baby Balm",             es: "Bálsamo para bebé" }
];
