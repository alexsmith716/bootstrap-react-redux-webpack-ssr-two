
require("@babel/polyfill");

var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var config;

try {

  config = JSON.parse(babelrc);

  if (Array.isArray(config.plugins)) {

    config.plugins.push('dynamic-import-node');

    console.log('>>>>>>>>>>>>>>>> SERVER.BABEL > GOOD !!! parsing .babelrc !!!');

  }

} catch (err) {

  console.log('>>>>>>>>>>>>>>>> SERVER.BABEL > ERROR !!! parsing .babelrc > err: ', err);

}

require('@babel/register')(config);
