
// A higher-order component (HOC) refers to a function that accepts a single React component and returns a new React component

// ----------------------------

// withContext(
//   childContextTypes: Object,
//   getChildContext: (props: Object) => Object
// ): HigherOrderComponent
// 
// Provides context to the component's children. 
// childContextTypes is an object of React prop types. 
// getChildContext() is a function that returns the child context. Use along with getContext().

// ----------------------------

// using the above HOC function 'withContext', accept React component { Provider as ReduxProvider }
// and return a new function aptly named 'Provider'

import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';

import { withContext } from 'recompose';

const Provider = withContext(
  { app: PropTypes.objectOf(PropTypes.any).isRequired },
  ({ app }) => ({ app })
)(ReduxProvider);

export default Provider;
