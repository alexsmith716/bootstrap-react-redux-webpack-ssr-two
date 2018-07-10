

import application_configuration from '../configuration'

const devserver = application_configuration.webpack.devserver


export function addDevServerConfiguration(configuration) {
  return {
    ...configuration,
    serve: {
      port : devserver.port,
      dev  : {
        publicPath : configuration.output.publicPath,
        headers : { 'Access-Control-Allow-Origin': '*' }
      }
    }
  }
}


export function setDevFileServer(configuration) {
  return {
    ...configuration,
    output: {
      ...configuration.output,
      publicPath: `http://${devserver.host}:${devserver.port}${configuration.output.publicPath}`
    }
  }
}