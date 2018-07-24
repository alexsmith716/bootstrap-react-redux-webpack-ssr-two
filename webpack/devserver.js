const dev_config = require('../config/config');

export function setDevFileServer(configuration) {

  return {

    ...configuration,

    output: {
      ...configuration.output,
      publicPath: `http://${dev_config.devServerHost}:${dev_config.devServerPort}${dev_config.devServerPath}`
    }
    
  }
}
