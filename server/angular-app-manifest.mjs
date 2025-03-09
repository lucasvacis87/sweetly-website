
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sweetly-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sweetly-website"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RLNE5GID.js"
    ],
    "route": "/sweetly-website/productos"
  },
  {
    "renderMode": 2,
    "route": "/sweetly-website/contacto"
  },
  {
    "renderMode": 2,
    "route": "/sweetly-website/redes"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sweetly-website",
    "route": "/sweetly-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27283, hash: '0d8f35aa15ab37bc5765f972761b0fc42b208d091f8113cf4dd04103dd26c838', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: 'fe9e9f5989b153a70fef9e6b070c15f440925402730c16d13ea6d5b15f226112', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 51321, hash: 'c0a7dc64a06429ded81df28163d1f0cc2ca82cb9d3cfc3837d62369f4103014c', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 51265, hash: '954beb68d8d2ebb06095bcb8656c8cd029b63f6033afef738ea41726d2c46d68', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'redes/index.html': {size: 51256, hash: 'a70f49b0deb4928bd83bf843dccf80e0870b623c2dd037bf3309a572e858cc0e', text: () => import('./assets-chunks/redes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102279, hash: 'de28f1bcef29cbe5380081cddbc7e532ef4745651e66e224d5a6444ab1ad62e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-55DAZ3VF.css': {size: 10940, hash: '6XYX2ghQMyY', text: () => import('./assets-chunks/styles-55DAZ3VF_css.mjs').then(m => m.default)}
  },
};
