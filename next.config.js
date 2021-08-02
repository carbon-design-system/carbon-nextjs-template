'use strict';

const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  sassOptions: {
    includePaths: ['node_modules'],
  },
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config;
  },
};
