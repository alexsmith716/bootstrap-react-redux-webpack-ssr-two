
// enable jest to handle webpack configuration
// https://jestjs.io/docs/en/cli#env-environment
// https://jestjs.io/docs/en/configuration#testurl-string

// NODE_PATH: environment variable - absolute path - instruct Node to search path for modules
// https://github.com/facebook/jest/blob/master/docs/Webpack.md
// https://github.com/facebook/jest/blob/master/docs/GettingStarted.md#using-babel
// https://jestjs.io/docs/en/configuration#moduledirectories-array-string
// https://jestjs.io/docs/en/using-matchers

// JSDOM is a JavaScript based headless browser that can be used to create a realistic testing environment.

module.exports = {

  verbose: true,
  // testEnvironment: 'node', // Default: 'jsdom'
  testEnvironment: 'jsdom',
  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href.
  testURL: 'http://localhost/',

  // (tell jest how to find files)
  // https://github.com/facebook/jest/blob/master/docs/Webpack.md#configuring-jest-to-find-our-files
  // An array of directory names to be searched recursively up from the requiring module's location
  // Default: '["node_modules"]'
  moduleDirectories: [
    process.env.NODE_PATH,
    'node_modules'
  ],

  // configure jest for webpack (tell jest how to process files)
  // https://github.com/facebook/jest/blob/master/docs/Webpack.md#handling-static-assets
  // mock a proxy for your className lookups (CSS Modules)
  // https://github.com/facebook/jest/blob/master/docs/Webpack.md#mocking-css-modules
  // use ES6 Proxy to mock CSS Modules
  // https://github.com/keyanzhang/identity-obj-proxy
  // https://github.com/facebook/jest/blob/master/docs/SnapshotTesting.md
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },

  // A set of global variables that need to be available in all test environments.
  // For example, the following would create a global '__DEV__' variable set to 'true' in all test environments:
  // Default: '{}'
  globals: {
    __CLIENT__: process.env.NODE_PATH === 'src',
    __SERVER__: process.env.NODE_PATH === 'api',
    __DEVELOPMENT__: true,
    __DEVTOOLS__: false,
    __DLLS__: false,
  }

  // Note that, if you specify a global reference value (like an object or array) here, 
  // and some code mutates that value in the midst of running a test, 
  // that mutation will not be persisted across test runs for other test files. 
  // In addition the 'globals' object must be json-serializable, 
  // so it can't be used to specify global functions. For that you should use 'setupFiles'.
};
