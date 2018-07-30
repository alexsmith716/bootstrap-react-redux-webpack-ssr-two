
// https://jestjs.io/docs/en/configuration#moduledirectories-array-string
// https://jestjs.io/docs/en/using-matchers
// https://github.com/facebook/jest

module.exports = {

  // An array of directory names to be searched recursively up from the requiring module's location
  // Default: '["node_modules"]'
  moduleDirectories: [
    process.env.NODE_PATH,
    'node_modules'
  ],

  // A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module.
  // Modules that are mapped to an alias are unmocked by default, regardless of whether automocking is enabled or not.
  // Use '<rootDir>' string token to refer to 'rootDir' value if you want to use file paths.
  // Additionally, you can substitute captured regex groups using numbered backreferences.
  // The order in which the mappings are defined matters. Patterns are checked one by one until one fits. 
  // The most specific rule should be listed first.
  // Note: If you provide module name without boundaries '^$' it may cause hard to spot errors.
  // 'relay' will replace all modules which contain 'relay' as a substring in its name: 'relay', 'react-relay' and 'graphql-relay' will all be pointed to your stub.
  // Default: 'null'
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
