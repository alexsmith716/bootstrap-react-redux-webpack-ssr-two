# bootstrap-react-redux-webpack-ssr-two


## Overview:

App is a continuation of repo 'bootstrap-react-redux-webpack-ssr-one'.


### To-Do:

  1) Implement `eslint`, `chai` && `jest`


### PORTS:

  Server API (api/api.js):
    Port: 3030

  Server Static && init delegate `react-router` rendering (server.js):
    Port: 3000

  Server Dev (webpack-serve):
    Port: 3001


### Webpack-Serve (references):

  https://github.com/webpack-contrib/webpack-serve
  https://github.com/webpack-contrib/webpack-hot-client
  https://github.com/webpack/webpack-dev-middleware#options
  https://github.com/koajs/cors


### Nodemon:

  https://github.com/remy/nodemon
  By default nodemon monitors the current working directory. 
  *** If you want to take control of that option, use the --watch option >>>> TO ADD SPECIFIC PATHS <<<<


### Webpack development server (webpack-hot-client):


#### Set options for webpack-hot-client:

  * CLI: 'webpack-serve --hot-client --config webpack.config.client.development.js'


### Of Note:

  * decorators make it possible to annotate and modify classes and properties at design time
  * a higher-order component (HOC aka 'enhancers') refers to a function that accepts a single React component and returns a new React component
  * a component transforms props into UI, a HOC transforms a component into another component
  
  * const EnhancedComponent = hoc(BaseComponent);
  * import { Provider as ReduxProvider } from 'react-redux';
  * const Provider = withContext(ReduxProvider);
  
  /** react-bootstrap (Bootstrap 3 components built with React) https://react-bootstrap.github.io/
   * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
   * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
   * The children of `<Portal/>` component will be appended to the `container` specified.
   */


