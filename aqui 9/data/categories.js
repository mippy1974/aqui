/* aquí - browse categories.
   The brief calls these "working categories": they are meant to be edited and
   extended. In this demo they live here; in the full app they move to the
   admin area. Icon files are in assets/icons/.

   CATEGORY PHOTOS
   Each tile shows a photo when one exists and falls back to the line icon when
   it does not, so photos can arrive one at a time with no code change.

   To add one: drop a square image into assets/categories/ named after the id
   below, for example assets/categories/skincare.jpg. Either .jpg or .png works.
   Recommended: square crop, 1000 x 1000 pixels or larger, same light and
   background across all seven so the grid reads as one set.

   To go back to icons for a category, remove its file (or clear its photo line
   here). Nothing else needs to change. */

window.CATEGORIES = [
  { id: 'skincare',  en: 'Natural Skincare & Bodycare',  es: 'Cuidado natural de piel y cuerpo', icon: 'assets/icons/cat-skincare.png',  photo: 'assets/categories/skincare.jpg' },
  { id: 'herbs',     en: 'Herbs, Tea & Natural Remedies', es: 'Hierbas, té y remedios naturales', icon: 'assets/icons/cat-herbs.png',     photo: 'assets/categories/herbs.jpg' },
  { id: 'food',      en: 'Healthy Food & Drinks',         es: 'Alimentos y bebidas saludables',   icon: 'assets/icons/cat-food.png',      photo: 'assets/categories/food.jpg' },
  { id: 'menstrual', en: 'Menstrual & Intimate Care',     es: 'Cuidado menstrual e íntimo',       icon: 'assets/icons/cat-menstrual.png', photo: 'assets/categories/menstrual.jpg' },
  { id: 'ritual',    en: 'Home, Ritual & Wellbeing',      es: 'Hogar, ritual y bienestar',        icon: 'assets/icons/cat-ritual.png',    photo: 'assets/categories/ritual.jpg' },
  { id: 'living',    en: 'Home & Living',                 es: 'Hogar y decoración',               icon: 'assets/icons/cat-living.png',    photo: 'assets/categories/living.jpg' },
  { id: 'kids',      en: 'Kids & Family',                 es: 'Niños y familia',                  icon: 'assets/icons/cat-kids.png',      photo: 'assets/categories/kids.jpg' }
];
