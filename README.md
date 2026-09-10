# aquí

A curated discovery app for natural products and locally or artisan made
products in Panama. This repository holds the demo version.

Live: https://mippy1974.github.io/aqui/

## Running it

There is no build step and nothing to install. Open `index.html` in a browser,
or serve the folder over HTTP. On GitHub Pages, enable Pages on the `main`
branch, root folder. The `.nojekyll` file must be present.

## What is in here

```
index.html          markup shell: header, view container, tab bar
styles.css          all styling, one file
app.js              text, state, search, views, router
data/categories.js  the seven browse categories
data/products.js    central product list, English and Spanish names
data/places.js      searchable towns with coordinates and province
data/brands.js      brands, points of sale, shipping coverage, links
data/content.js     Mission, Privacy Policy, Terms of Use, both languages
assets/logo.png     wordmark, replaceable
assets/icons/       navigation and category icons
```

Editing content means editing the files in `data/`. They are plain JavaScript
arrays with comments explaining each field. In the full version this content
moves behind a password protected admin area.

## How the search works

The brief asks for physical availability and shipping to work as two
independent criteria that can be used at the same time. The rule, in
`search()` in `app.js`:

1. Filter brands by the chosen product and/or category.
2. If no location is chosen, return them all.
3. Otherwise keep a brand when it has a point of sale inside the radius,
   **or** shipping is switched on and the brand ships to that province.

The radius is measured from a brand's **points of sale**, never from the
brand's own location. A brand may produce in Panama City and be sold in a shop
in Coronado, and a search in Coronado has to find it.

Distances are straight line, calculated with the haversine formula. No mapping
service is called.

## Location

Typing a location is the primary path, because someone in Coronado may be
planning a trip to Boquete. "Use my location" is optional. It reads the browser
position once, matches it to the nearest town in `data/places.js`, and discards
the coordinates. Nothing is stored or transmitted.

## Languages

English and Spanish throughout: navigation, buttons, categories, filters,
products, system text and the Mission and legal pages. A product exists once
and carries both names, so a search in either language reaches the same brands.
Autocomplete matches across languages, so typing `chucrut` in English mode
still finds Sauerkraut.

## What this demo does not include

No user accounts, no brand accounts, no cart, no checkout and no admin area.
None of those are needed for V1 per the brief, and the admin area is
deliberately out of the demo. The data shape is the same one the full version
uses, so the content carries over.

Brands and products in `data/` are invented placeholders.

## Legal pages

`data/content.js` holds the Privacy Policy and Terms of Use in both languages.
They describe what this build actually does. They are a starting point and
should be reviewed by a lawyer before the app is published.
