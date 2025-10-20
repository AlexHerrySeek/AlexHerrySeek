import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteLegacyPlugin from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    viteLegacyPlugin({
      targets: ['defaults', 'fully supports es6-module'],
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      parse: {
        html5_comments: false,
      },
      format: {
        comments: false,
      },
    },
  },
  server: {
    middlewareMode: true,
    setupMiddlewares(middlewares, server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/editor') {
          res.writeHead(302, { Location: '/editor.html' });
          res.end();
        } else {
          next();
        }
      });
      return middlewares;
    },
  },
});
