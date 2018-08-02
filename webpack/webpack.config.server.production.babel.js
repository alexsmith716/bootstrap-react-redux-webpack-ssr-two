const { serverConfiguration } = require('universal-webpack');
const settings = require('./universal-webpack-settings');
const configuration = require('./webpack.config');
const path = require('path');

configuration.module.rules.push(
  {
    test: /\.(scss)$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          importLoaders: 2,
          //sourceMap: true,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          //sourceMap: true,
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          //sourceMap: true,
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(configuration.context, 'client/assets/scss/app/variables.scss'),
            path.resolve(configuration.context, 'client/assets/scss/mixins/mixins.scss'),
          ],
        },
      },
    ]
  },
  {
    test: /\.(css)$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader : 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
          importLoaders: 1,
          //sourceMap: true
        }
      },
      {
        loader : 'postcss-loader'
      },
    ]
  },

);

// console.log('>>>>>>>>>>>>>> WEBPACK SERVER DEV > CONFIG >>>>>>>>>>>>>>>:', configuration)

const configurationServer = serverConfiguration(configuration, settings);

// console.log('>>>>>>>>>>>>>> WEBPACK SERVER DEV > CONFIG > UW >>>>>>>>>>:', configurationServer)

export default configurationServer;
