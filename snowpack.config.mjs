import proxy from 'http2-proxy';
/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    /* ... */
    public: '/',
    src: '/dist'
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-postcss'
  ],
  routes: [
    /* Send api messages to the express server in development */
    {
      src: '/api/.*',
      dest: (req, res) => {
        return proxy.web(req, res, {
          hostname: 'localhost',
          port: 3000,
        });
      },
    },
    {
      /* Send WebSocket messages to the express server in development */
      src: '/ws',
      upgrade: (req, socket, head) => {
        const defaultWSHandler = (err, req, socket, head) => {
          if (err) {
            console.error('proxy error', err);
            socket.destroy();
          }
          console.log('proxy worked')
        };

        proxy.ws(
          req,
          socket,
          head,
          {
            hostname: 'localhost',
            port: 3000,
          },
          defaultWSHandler,
        );
      },
    }
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
  },
  exclude: ['**/node_modules/**/*', 'server/**/*']
};
