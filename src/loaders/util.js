const url = require('url');

const getHookNetUrl = () => {
  return url.pathToFileURL(require.resolve('./hook-net.js')).toString();
};

const getHookHttpUrl = () => {
  return url.pathToFileURL(require.resolve('./hook-http.js')).toString();
};

module.exports.getHookNetUrl = getHookNetUrl;

module.exports.getHookHttpUrl = getHookHttpUrl;
