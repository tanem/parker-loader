'use strict';

module.exports = function markdown(metrics, results) {
  return metrics.reduce(function(str, metric){
    return str + '__' + metric.name + '__ ' + results[metric.id] + '\n';
  }, '');
};
