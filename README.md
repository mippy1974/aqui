# aquí

**A curated discovery app for natural and artisan-made products in Panama.**

Many wonderful products and small brands already exist in Panama. They are simply hard to find, scattered across Instagram, WhatsApp groups, weekend markets and word of mouth. aquí brings them together in one place and answers two questions: *what is available?* and *where or how can I get it?*

aquí is not a marketplace. Nothing is sold through the app. Once someone finds a brand, aquí sends them straight to the brand's website, Instagram, WhatsApp or a physical point of sale.

This repository is a **working demo** built from the aquí App Concept & Functional Brief. Every brand, shop and person in the demo data is invented.

## Try it

Open the live demo on your phone or laptop: `https://mippy1974.github.io/aqui/`

Or run it locally: download the folder and open `index.html` in any browser. There is no build step and no server.

## What the demo shows

Three ways to use aquí, exactly as the brief describes them:

| Way to use it | Try this in the demo |
| --- | --- |
| **Specific product search** | Type `kim…`, pick *Kimchi*, choose *Penonomé*, 25 km, switch on *Ships to this location*. Two brands appear: one with a point of sale in Penonomé, one that ships nationwide. A third kimchi brand in Boquete is correctly left out. |
| **Browse by category** | Tap *Healthy Food & Drinks*, then narrow by location, radius and shipping. |
| **Location discovery** | Tap *near me*, choose *Boquete*, 25 km, no product or category. The app lists every brand with a point of sale within 25 km. |

Also in the demo: English/Spanish toggle that switches interface text **and** product names, autocomplete from the central product list (typing `masa` finds *Pan de masa madre* / *Sourdough Bread*), a "nothing within reach" state that offers to widen the radius or include shipping, full brand profiles, and a Mission page.

## How the brief's technical questions are answered

The last page of the brief lists the points that need to be assessed. Here is how each one is handled in this demo, and what changes for the real V1.

| Brief requirement | In this demo | In V1 |
| --- | --- | --- |
| Brand database with multiple categories | `data/brands.js`, each brand has a `categories` array | Same shape, stored in a database table plus a brand↔category link table |
| Central product database | `data/products.js`, one record per product | Same, as a `products` table managed only through the admin area |
| Many-to-many products ↔ brands | Brands hold a `products` array of product ids | A `brand_products` link table |
| English and Spanish names for the same product | Every product has `en` and `es` on one record | Same |
| Product search with suggestions | `suggest()` in `app.js` matches both languages, prefix first | Same logic on the server, or the product list cached in the app |
| Manually selectable search location | Dropdown of Panama places with coordinates (`data/places.js`) | A places table, or a geocoding service for free-text entry |
| Optional "use my location" | Browser geolocation, snapped to the nearest known place for the province | Same |
| Multiple retail locations per brand | `retail` array per brand, unlimited length | A `retail_locations` table with a brand id |
| Geographic coordinates for retail locations | Each retail location has `lat` and `lng` | Same |
| Radius search based on retail locations | Haversine distance from the chosen place to every retail location; brand location is **not** used | A geo query (for example PostGIS `ST_DWithin`), which stays fast at 2,000 brands |
| Structured shipping coverage | `shipping.type` is `nationwide`, `provinces` (with a list) or `none` | Same; can be extended to districts or specific towns later |
| Product + location + radius + shipping combined | `search()` in `app.js`: product filter, then *in radius OR ships here* | Same rule, run on the server |
| Location-only search | Leave product and category empty | Same |
| Browse by category with location and shipping filters | Category filter goes through the same `search()` | Same |
| Admin area | Not in this demo (data is edited in the JS files) | A simple admin site over the database: brands, photos, products, categories, retail locations, shipping, mission text |
| Bilingual app | All interface text lives in one `T` object with `en` and `es` | Same pattern; brand About texts already have both languages in the data |
| User accounts and favorites later | Nothing in the data model depends on a user; favorites would be a `user_favorites` table pointing at brand ids | Add when needed, no change to the search |
| Scalability beyond 50 brands | 21 demo brands; the search is a simple filter | The same data shape in a real database handles thousands of brands |

## Project structure

```
index.html          the app shell
styles.css          styling (cream, sand, olive palette from the brief)
app.js              routing, search logic, bilingual text, rendering
data/
  categories.js     the 7 working categories (EN + ES)
  products.js       the central product list (EN + ES)
  places.js         searchable Panama places with coordinates and provinces
  brands.js         21 invented demo brands + the Mission page text
```

## Publishing on GitHub Pages

1. Push this folder to a public repository called `aqui`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set Source to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. After a minute the demo is live at `https://mippy1974.github.io/aqui/`.

## Status

Demo for discussion. Not a production app. Photos are placeholder tiles; brand data is fictional.
