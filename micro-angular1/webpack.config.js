const { shareAll } = require('@angular-architects/module-federation/webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'angular_micro_app',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angular_micro_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/app/test-ng-component/test-ng-component.component.ts',
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    }),
  ],
};
