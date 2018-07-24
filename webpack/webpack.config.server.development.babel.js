// const webpack = require('webpack');
// const baseConfiguration = require('./webpack.config.server.production.babel');
// 
// const dev_config = require('../config/config');
// 
// const configuration = Object.assign({}, baseConfiguration);
// 
// // const publicPath = configuration.output.publicPath;
// 
// configuration.mode = 'development',
// 
// // Get all statics from webpack development server
// // configuration.output.publicPath = `http://${dev_config.devServerHost}:${dev_config.devServerPort}${configuration.output.publicPath}`;
// 
// 
// configuration.output.publicPath = `http://${dev_config.devServerHost}:${dev_config.devServerPort}${dev_config.devServerPath}`;
// 
// console.log('>>>>>> webpack.config.server.development.babel.js > configuration.output.publicPath: ', configuration.output.publicPath);
// 
// 
// export default configuration;


const webpack = require('webpack');
const baseConfiguration = require('./webpack.config.server.production.babel');
const configuration = Object.assign({}, baseConfiguration);

const dev_config = require('../config/config');

// const configuration = Object.assign({}, baseConfiguration);

configuration.mode = 'development',

console.log('>>>>>> webpack.config.server.development.babel.js > configurationXX: ', configuration);
console.log('>>>>>> webpack.config.server.development.babel.js > configuration.modeXX: ', configuration.mode);
console.log('>>>>>> webpack.config.server.development.babel.js > configuration.outputXX: ', configuration.output);

// Get all statics from webpack development server
// configuration.output.publicPath = `http://${dev_config.devServerHost}:${dev_config.devServerPort}${configuration.output.publicPath}`;


configuration.output.publicPath = `http://${dev_config.devServerHost}:${dev_config.devServerPort}${dev_config.devServerPath}`;

console.log('>>>>>> webpack.config.server.development.babel.js > configuration.output.publicPath: ', configuration.output.publicPath);


export default configuration;