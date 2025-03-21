
export default {
  basePath: 'https://lucasvacis87.github.io/sweetly-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
