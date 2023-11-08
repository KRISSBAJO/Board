// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    // Add your aliases here
    'https': require.resolve('https-browserify'),
    'http': require.resolve('stream-http'),
    'querystring': require.resolve('querystring-es3'),
  }),
);
