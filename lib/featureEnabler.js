const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const options = loaderUtils.getOptions(this);

  return source.replace(/isEnabled\('filter'\)/g, options.filter);
};
