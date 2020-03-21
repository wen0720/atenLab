const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.vue'],
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/sass/_mixins.scss'),
        path.resolve(__dirname, 'src/assets/sass/_variables.scss'),
      ],
    },
  },
};
