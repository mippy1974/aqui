/* aquí - gazetteer of search locations.
   Add a town here and it becomes searchable everywhere in the app.
   province must match one of the values used in brand shipping coverage. */

window.PLACES = [
  { id: 'panama-city',   en: 'Panama City',        es: 'Ciudad de Panamá',    province: 'Panamá',        lat: 8.9824,  lng: -79.5199 },
  { id: 'la-chorrera',   en: 'La Chorrera',        es: 'La Chorrera',         province: 'Panamá Oeste',  lat: 8.8800,  lng: -79.7833 },
  { id: 'arraijan',      en: 'Arraiján',           es: 'Arraiján',            province: 'Panamá Oeste',  lat: 8.9500,  lng: -79.6667 },
  { id: 'coronado',      en: 'Coronado',           es: 'Coronado',            province: 'Panamá Oeste',  lat: 8.5333,  lng: -79.9500 },
  { id: 'gorgona',       en: 'Gorgona',            es: 'Gorgona',             province: 'Panamá Oeste',  lat: 8.5500,  lng: -79.8833 },
  { id: 'san-carlos',    en: 'San Carlos',         es: 'San Carlos',          province: 'Panamá Oeste',  lat: 8.4833,  lng: -80.0500 },
  { id: 'altos',         en: 'Altos del María',    es: 'Altos del María',     province: 'Panamá Oeste',  lat: 8.6167,  lng: -80.0167 },
  { id: 'el-valle',      en: 'El Valle de Antón',  es: 'El Valle de Antón',   province: 'Coclé',         lat: 8.6000,  lng: -80.1333 },
  { id: 'penonome',      en: 'Penonomé',           es: 'Penonomé',            province: 'Coclé',         lat: 8.5167,  lng: -80.3500 },
  { id: 'aguadulce',     en: 'Aguadulce',          es: 'Aguadulce',           province: 'Coclé',         lat: 8.2500,  lng: -80.5500 },
  { id: 'santiago',      en: 'Santiago',           es: 'Santiago',            province: 'Veraguas',      lat: 8.1000,  lng: -80.9833 },
  { id: 'santa-fe',      en: 'Santa Fe',           es: 'Santa Fe',            province: 'Veraguas',      lat: 8.5167,  lng: -81.0833 },
  { id: 'chitre',        en: 'Chitré',             es: 'Chitré',              province: 'Herrera',       lat: 7.9667,  lng: -80.4333 },
  { id: 'pese',          en: 'Pesé',               es: 'Pesé',                province: 'Herrera',       lat: 7.9000,  lng: -80.6167 },
  { id: 'las-tablas',    en: 'Las Tablas',         es: 'Las Tablas',          province: 'Los Santos',    lat: 7.7667,  lng: -80.2833 },
  { id: 'pedasi',        en: 'Pedasí',             es: 'Pedasí',              province: 'Los Santos',    lat: 7.5333,  lng: -80.0333 },
  { id: 'david',         en: 'David',              es: 'David',               province: 'Chiriquí',      lat: 8.4333,  lng: -82.4333 },
  { id: 'boquete',       en: 'Boquete',            es: 'Boquete',             province: 'Chiriquí',      lat: 8.7800,  lng: -82.4400 },
  { id: 'volcan',        en: 'Volcán',             es: 'Volcán',              province: 'Chiriquí',      lat: 8.7833,  lng: -82.6333 },
  { id: 'cerro-punta',   en: 'Cerro Punta',        es: 'Cerro Punta',         province: 'Chiriquí',      lat: 8.8500,  lng: -82.5833 },
  { id: 'puerto-armuelles', en: 'Puerto Armuelles', es: 'Puerto Armuelles',   province: 'Chiriquí',      lat: 8.2833,  lng: -82.8667 },
  { id: 'bocas',         en: 'Bocas del Toro',     es: 'Bocas del Toro',      province: 'Bocas del Toro',lat: 9.3400,  lng: -82.2400 },
  { id: 'colon',         en: 'Colón',              es: 'Colón',               province: 'Colón',         lat: 9.3592,  lng: -79.9014 },
  { id: 'portobelo',     en: 'Portobelo',          es: 'Portobelo',           province: 'Colón',         lat: 9.5500,  lng: -79.6500 }
];

window.PROVINCES = [
  'Bocas del Toro', 'Coclé', 'Colón', 'Chiriquí', 'Darién',
  'Herrera', 'Los Santos', 'Panamá', 'Panamá Oeste', 'Veraguas'
];
