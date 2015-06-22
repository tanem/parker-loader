'use strict';

var test = require('tape');
var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var readFile = function(relativePath){
  return fs.readFileSync(path.join(__dirname, relativePath), { encoding: 'utf-8' });
};

var makeConfig = function(entry){
  return {
    target: 'node',
    entry: entry,
    output: {
      path: path.join(__dirname, '../build'),
      filename: 'parker-loader.test.js'
    }
  };
};

test('should pass the CSS through without reformatting it', function(t){
  
  t.plan(1);
  
  webpack(
    makeConfig(path.join(__dirname, 'fixtures/passthrough.js')),
    function(error) {
      if (error) t.fail(error);
      t.equal(
        readFile('../build/styles.css'),
        readFile('fixtures/styles.css')
      );
    }
  );

});

test('should default the format to markdown', function(t){
  
  t.plan(1);

  webpack(
    makeConfig(path.join(__dirname, 'fixtures/default-format.js')),
    function(error) {
      if (error) t.fail(error);
      t.equal(
        readFile('../build/report.md'),
        readFile('fixtures/report.md')
      );
    }
  );
  
});

test('should default the filename to [name]-analysis.md', function(t){
  
  t.plan(1);
    
  webpack(
    makeConfig(path.join(__dirname, 'fixtures/default-filename.js')),
    function(error) {
      if (error) t.fail(error);
      t.equal(
        readFile('../build/styles-analysis.md'),
        readFile('fixtures/report.md')
      );
    }
  );

});

test('should allow specification of the format', function(t){

  t.plan(1);

  webpack(
    makeConfig(path.join(__dirname, 'fixtures/json.js')),
    function(error) {
      if (error) t.fail(error);
      t.equal(
        readFile('../build/report.json'),
        readFile('fixtures/report.json')
      );
    }
  );

});

test('should allow specification of the output filename', function(t){
  
  t.plan(1);
    
  webpack(
    makeConfig(path.join(__dirname, 'fixtures/filename.js')),
    function(error) {
      if (error) t.fail(error);
      t.equal(
        readFile('../build/parker-report.extension'),
        readFile('fixtures/report.md')
      );
    }
  );

});
