
require("@babel/polyfill");
const webpack = require('webpack');
const helpers = require('./vendor.dll.helpers');
const path = require('path');

const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const base_configuration = require('./webpack.config');
const dev_config = require('../config/config');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const assetsPath = path.resolve(base_configuration.context, './build/public/assets');
const serverPath = path.resolve(base_configuration.context, './build/server');
const webpackDllsPath = path.resolve(base_configuration.context, './dlls/');

const settings = require('./universal-webpack-settings');
const { clientConfiguration } = require('universal-webpack');

// ==============================================================================================

import { addDevServerConfiguration, setDevFileServer } from './devserver';

// base_configuration.output.publicPath = dev_config.devServerPath;

// var validDLLs = helpers.isValidDLLs('vendor', configuration.output.path);
var validDLLs = helpers.isValidDLLs('vendor','/');

if (process.env.WEBPACK_DLLS === '1' && !validDLLs) {
  process.env.WEBPACK_DLLS = '0';
  console.warn('>>>>>> webpack.config.client.development.babel > WEBPACK_DLLS disabled !! <<<<<<<<<<');
};

// ==============================================================================================

let configuration = clientConfiguration(base_configuration, settings);

// ==============================================================================================

configuration = addDevServerConfiguration(configuration);

// ==============================================================================================

configuration.mode = 'development';

// https://webpack.js.org/guides/development/#source-maps
// configuration.devtool = 'cheap-eval-source-map'
// configuration.devtool = 'source-map';
configuration.devtool = 'inline-source-map';

configuration.output.filename = '[name].[hash].js';
configuration.output.chunkFilename = '[name].[chunkhash].chunk.js';

configuration.entry.main.push(
  'bootstrap-loader',
  './client/index.js',
);

// configuration.entry.vendor.push(
//   '',
// );

configuration.module.rules.push(
  // {
  //   enforce: 'pre',
  //   test: /\.jsx?$/,
  //   loader: 'eslint-loader',
  //   exclude: /node_modules(\/|\\)(?!(@feathersjs))/,
  //   options: { 
  //     emitWarning: true 
  //   }
  // },
  {
    test: /\.(scss)$/,
    use: [
      {
        loader: 'style-loader',
        options: { 
          sourceMap: true 
        }
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          importLoaders: 2,
          sourceMap: true,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(configuration.context, 'client/assets/scss/mixins/mixins.scss')
          ],
        },
      },
    ]
  },
  {
    test: /\.(css)$/,
    use: [
      {
        loader: 'style-loader',
        options: { 
          sourceMap: true 
        }
      },
      {
        loader : 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          importLoaders: 1,
          sourceMap: true
        }
      },
      {
        loader : 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      },
    ]
  },
);

// ==============================================================================================

configuration = setDevFileServer(configuration)

// ==============================================================================================

configuration.plugins.push(

  // new CleanWebpackPlugin([assetsPath,serverPath,webpackDllsPath], { root: configuration.context }),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: false,
  }),

  new ReactLoadablePlugin({
    filename: path.join(configuration.output.path, 'loadable-chunks.json')
  }),

  new webpack.NamedModulesPlugin(),

);

// ==============================================================================================

module.exports = configuration;

// console.log('>>>>>>>>>>>>>> WEBPACK DEV > CONFIG >>>>>>>>>>>>>>>: ', configuration);
// console.log('>>>>>>>>>>>>>> WEBPACK DEV > CONFIG RULES >>>>>>>>>: ', configuration.module.rules);

if (process.env.WEBPACK_DLLS === '1' && validDLLs) {
  helpers.installVendorDLL(configuration, 'vendor');
};

