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


### Flow:

  * A static type checker

  * https://flow.org/en/docs/config/ignore/
  * https://flow.org/en/docs/config/include/

  * Flow needs to know which files to read and watch for changes. This set of files is determined by taking all `[include]` files and excluding all the `[ignore]` files.
  * Including a directory recursively includes all the files under that directory.
  * The project root directory (where your `.flowconfig` lives) is automatically included.
  * Each line in the include section is a path to include. 
  * These paths can be relative to the root directory or absolute, and support both single and double star wildcards.

  * Ignores are processed AFTER includes. If you both include and ignore a file it will be ignored.

  * Flow CLI: Using the command `flow` will type-check your current directory if the `.flowconfig` file is present. 


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


