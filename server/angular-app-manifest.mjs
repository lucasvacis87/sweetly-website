
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lucasvacis87.github.io/sweetly-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sweetly-website"
  },
  {
    "renderMode": 2,
    "route": "/sweetly-website/productos"
  },
  {
    "renderMode": 2,
    "route": "/sweetly-website/como-lo-hacemos"
  },
  {
    "renderMode": 2,
    "route": "/sweetly-website/contacto"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MX6D2C5C.js"
    ],
    "route": "/sweetly-website/carrito"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sweetly-website",
    "route": "/sweetly-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28569, hash: 'c3196041cd212fe13c65cf7cc4c852cb4804fcc78108591816ed06e2e24f0447', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17513, hash: '975402ad8e06e2f28bd5b9a47b27a59c86ae0b8dc855dab1619aab9c141c1e34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 97721, hash: '2b7e704dafb5b3d702421509a0c6f2cb14e781de7516c4a2580dd87698494c10', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'como-lo-hacemos/index.html': {size: 50624, hash: '8d414308fbf61a934e70adbf60ded33f3cde83415891fc405e8c35beabc39451', text: () => import('./assets-chunks/como-lo-hacemos_index_html.mjs').then(m => m.default)},
    'carrito/index.html': {size: 69775, hash: 'ba661765644846d075c18a37fc37f81708c92114dfa5ceb3378266dda8210be9', text: () => import('./assets-chunks/carrito_index_html.mjs').then(m => m.default)},
    'index.html': {size: 125669, hash: 'a77c93be1892cd5afc5e5ff6a4363cf0ca33fd710f692c98870cf4762feeff04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 115654, hash: '8d407cf0bc89e1f451cbaa20d3effb4ec9be1eb235304261d82817d939790517', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-UK4YS6TA.css': {size: 84711, hash: '8ne3ajkF4gk', text: () => import('./assets-chunks/styles-UK4YS6TA_css.mjs').then(m => m.default)}
  },
};
