const dev_config = require('../config/config');

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

export function setDevFileServer(configuration) {
  return {
    ...configuration,
    output: {
      ...configuration.output,
      publicPath: `http://${dev_config.devServerHost}:${dev_config.devServerPort}${dev_config.devServerPath}`
    }
  }
}
