'use strict';

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
  var formatter = formatters[query.format] || formatters.markdown;
  var url = loaderUtils.interpolateName(this, query.filename || '[name]-analysis.md', {});
  var output = formatter(metrics, results);
  this.emitFile(url, output);
  return source;
};
