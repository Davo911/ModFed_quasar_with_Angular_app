const { configure } = require('quasar/wrappers');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const dependencies = require('./package.json').dependencies;
const path = require('path');
module.exports = configure(function (ctx) {
  return {
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx,vue}',
        },
      },
    },
    extendWebpack(cfg) {
      cfg.entry = path.resolve(__dirname, './.quasar/main.js');
    },

    boot: [],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      extendWebpack(cfg) {
        cfg.entry = path.resolve(__dirname, './.quasar/main.js');
        cfg.plugins.push(
          new ModuleFederationPlugin({
            name: 'app_general',
            filename: 'remoteEntry.js',
            exposes: {},
            remotes: {
              app_exposes: 'app_exposes@http://localhost:3001/remoteEntry.js',
              angular_micro_app:
                'angular_micro_app@http://localhost:8080/remoteEntry.js',
            },
            shared: {
              ...dependencies,
            },
          })
        );
      },

      chainWebpack(chain) {
        chain.optimization.delete('splitChunks');
      },
    },

    devServer: {
      server: {
        type: 'http',
      },
      port: 8080,
      open: true,
    },

    framework: {
      config: {},

      plugins: [],
    },

    animations: [],

    ssr: {
      pwa: false,

      prodPort: 3000,

      maxAge: 1000 * 60 * 60 * 24 * 30,

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render', // keep this as last one
      ],
    },

    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      manifest: {
        name: 'The Vue Host',
        short_name: 'The Vue Host',
        description: '',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {},

      builder: {
        appId: 'vuehost',
      },
    },
  };
});
