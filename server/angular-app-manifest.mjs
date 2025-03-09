
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/s/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/s"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RLNE5GID.js"
    ],
    "route": "/s/productos"
  },
  {
    "renderMode": 2,
    "route": "/s/contacto"
  },
  {
    "renderMode": 2,
    "route": "/s/redes"
  },
  {
    "renderMode": 2,
    "redirectTo": "/s",
    "route": "/s/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27269, hash: '9869dfe229bcb9a60b14ff5ce88f46568a575c4120cad41f7a106312ca0fc038', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17195, hash: 'af628368693fa65c13cfc6d55273599f280c22b3f0caa34e0e66535d8fdc8a7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 51251, hash: '398d1d2925458858ad70a79b98b851f6f4362fb6e2c1cfa90b80239b2080ebd8', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 51307, hash: '4b037b3dee3255519670da8b7761201d306d3784ea725c61efb123864b8afa08', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'redes/index.html': {size: 51242, hash: '6dfdbbe14eabe2445e5f0c38c9bfc5f6ac6649527f14bcd3726209f6f9b6ddad', text: () => import('./assets-chunks/redes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102265, hash: 'bdfdef19350eba206f1bba25afb10bd9db1fde65a06e419cafb6674c16825036', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-55DAZ3VF.css': {size: 10940, hash: '6XYX2ghQMyY', text: () => import('./assets-chunks/styles-55DAZ3VF_css.mjs').then(m => m.default)}
  },
};
