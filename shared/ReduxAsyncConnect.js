import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router';
import { trigger } from 'redial';
import NProgress from 'nprogress';
import asyncMatchRoutes from '../server/utils/asyncMatchRoutes';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// With the introduction of React Router v4, there is no longer a centralized route configuration.
// There are some use-cases where it is valuable to know about all the app's potential routes such as:
//    Loading data on the server or in the lifecycle before rendering the next screen
//    Linking to routes by name
// figure out what is going to be rendered before it actually is rendered
// --------------------------------------------------------------------------

// render data which is dynamically loaded from API into a component on both server and client renders
// passing required data component via props
// rendering 'NProgress' loader if props are empty

// HOC withRouter will pass updated match, location, history props to the wrapped component whenever it renders
@withRouter

// --------------------------------------------------------------------------

// <ReduxAsyncConnect routes={routes} store={store} helpers={providers}>
export default class ReduxAsyncConnect extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    previousLocation: null
  };

  // ----------------------------------------------------------------------------------------------------------
  // https://reactjs.org/docs/react-component.html#mounting
  // Mounting:
  //   Methods called in the following order when an instance of a component is being created and inserted into the DOM:
  //     * constructor()
  //     * static getDerivedStateFromProps()
  //     * render()
  //     * componentDidMount()
  // ----------------------------------------------------------------------------------------------------------

  // componentWillMount(): invoked just before mounting occurs
  // https://reactjs.org/blog/2018/03/29/react-v-16-3.html
  componentWillMount() {
    // progress bars for Ajax applications
    NProgress.configure({ trickleSpeed: 200 });
  }

  async componentWillReceiveProps(nextProps) {

    const { history, location, routes, store, helpers } = this.props;

    const navigated = nextProps.location !== location;

    if (navigated) {

      // save the location so we can render the old screen
      NProgress.start();

      this.setState({ previousLocation: location });

      // load data while the old screen remains
      const { components, match, params } = await asyncMatchRoutes(routes, nextProps.location.pathname);

      const triggerLocals = {
        ...helpers,
        store,
        match,
        params,
        history,
        location: nextProps.location
      };

      await trigger('fetch', components, triggerLocals);

      if (__CLIENT__) {
        await trigger('defer', components, triggerLocals);
      }

      // clear previousLocation so the next screen renders
      this.setState({ previousLocation: null });

      NProgress.done();
    }
  }

  render() {
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    // use a controlled <Route> to trick all descendants into
    // rendering the old location
    // Routes are objects with the same properties as a '<Route>'
    const voo = <Route location={previousLocation || location} render={() => children} />
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > voo:', voo);
    return <Route location={previousLocation || location} render={() => children} />;
  }
}
