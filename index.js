var merge = require('lodash.merge');
var loaderUtils = require('loader-utils');
var Parker = require('parker');
var formatters = require('parker/lib/Formatters');
var markdownFormatter = require('./lib/markdown-formatter');
var metrics = require('parker/metrics/All');

module.exports = function(source){
  this.cacheable && this.cacheable();
  formatters = merge(formatters, { markdown: markdownFormatter });
  var results = new Parker(metrics).run(source);
  var query = loaderUtils.parseQuery(this.query);
  var filename = query.filename;
  var formatter = formatters[query.format] || formatters.markdown;
  var output = formatter(metrics, results);
  if (filename) {
    this.emitFile(filename, output);
  } else {
    this.emitError('parker-loader requires an output filename');
  }
  return source;
};
