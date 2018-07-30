const dev_config = require('../config/config');

// Object Spread Syntax '...Object'
// never mutate state
// using 'object spread operator' as opposed to 'Object.assign()' method
// Using Object Spread Operator to create copies of objects with new or updated values
// 'object spread operator' >>> ES6 >>> "@babel/plugin-proposal-object-rest-spread"

// return a new 'configuration' object with a new 'serve' property
export function addDevServerConfiguration(configuration) {

  return {
    ...configuration,
    serve: {
      port: dev_config.devServerPort,
      devMiddleware: {
        publicPath: dev_config.devServerPath,
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
    }
  }
}

// return a new 'configuration' object with an updated 'output' property
export function setDevFileServer(configuration) {
  return {
    ...configuration,
    output: {
      ...configuration.output,
      publicPath: `http://${dev_config.devServerHost}:${dev_config.devServerPort}${dev_config.devServerPath}`
    }
  }
}
