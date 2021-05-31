/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    /* ... */
    public: '/',
    src: '/dist'
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss'
  ],
  routes: [
    /* Send api messages to the express server in development */
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    /* ... */
    watch: true
  },
  exclude: ['**/node_modules/**/*']
};
