
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
    'index.csr.html': {size: 28539, hash: '2facacf2b96892a97fa8c375d166c431db1a7c3893741a97a9000229d50c0fa7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17483, hash: '5332b8cd090bf2acdadcf9c8bb4bdb35a537b4468b5fe4df4550b68da583f47b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 97541, hash: 'ee15a7e015c19e721545abd7100c028d7c88aef6d38843d721f5270421d2b774', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 115486, hash: '97b2d7f9f0c4f845ff98cbe85bf1fa2f65ca576224143f63bd48934b939dd4e8', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'como-lo-hacemos/index.html': {size: 50444, hash: '8559f0e23a1133d86314eba3b775796a870486628231d5f78aed89faf1fdbadf', text: () => import('./assets-chunks/como-lo-hacemos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 125488, hash: '820d3e5db0f6a664358f3308e70bf8bd6705d1ffd62b10d990f47a6135041257', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'carrito/index.html': {size: 69593, hash: '9a7c1565912e659f623f2ef4fca93d9ceab94969c1922207fedcf3b7ef20d0fe', text: () => import('./assets-chunks/carrito_index_html.mjs').then(m => m.default)},
    'styles-UK4YS6TA.css': {size: 84711, hash: '8ne3ajkF4gk', text: () => import('./assets-chunks/styles-UK4YS6TA_css.mjs').then(m => m.default)}
  },
};
