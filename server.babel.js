
require("@babel/polyfill");

var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var config;

try {

  config = JSON.parse(babelrc);

  if (Array.isArray(config.plugins)) {

    config.plugins.push('dynamic-import-node');

    console.log('>>>>>>>>>>>>>>>> SERVER.BABEL > GOOD parsing .babelrc !!!!!!!!!!!!!!: ', config);

  }

} catch (err) {

  console.log('>>>>>>>>>>>>>>>> SERVER.BABEL > ERROR parsing .babelrc !!!!!!!!!!!!!!: ', err);

}

require('@babel/register')(config);
