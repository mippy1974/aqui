// Categories are managed centrally. A brand can belong to more than one.
// In V2 this file becomes a database table with the same shape.
window.AQUI = window.AQUI || {};
AQUI.categories = [
  { id: "skincare",  icon: "🧴", en: "Natural Skincare & Bodycare", es: "Cuidado natural de piel y cuerpo" },
  { id: "herbs",     icon: "🌿", en: "Herbs, Tea & Natural Remedies", es: "Hierbas, té y remedios naturales" },
  { id: "food",      icon: "🥬", en: "Healthy Food & Drinks",         es: "Comida y bebidas saludables" },
  { id: "intimate",  icon: "🌸", en: "Menstrual & Intimate Care",     es: "Cuidado menstrual e íntimo" },
  { id: "ritual",    icon: "🕯️", en: "Home, Ritual & Wellbeing",      es: "Hogar, ritual y bienestar" },
  { id: "living",    icon: "🪵", en: "Home & Living",                 es: "Hogar y decoración" },
  { id: "kids",      icon: "🧸", en: "Kids & Family",                 es: "Niños y familia" }
];
