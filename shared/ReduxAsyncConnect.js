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

// share props and behavior between components/containers
// HOC withRouter will pass updated match, location, history props to the wrapped component whenever it renders
@withRouter

// --------------------------------------------------------------------------

// <ReduxAsyncConnect routes={routes} store={store} helpers={providers}>
export default class ReduxAsyncConnect extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired, // Anything that can be rendered: numbers, strings, elements or an array
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

  // methods 'componentWillMount' && 'componentWillReceiveProps' are legacy:
  // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
  // https://reactjs.org/docs/react-component.html#legacy-lifecycle-methods

  // componentWillMount(): invoked just before mounting occurs
  componentWillMount() {
    // progress bars for Ajax applications
    NProgress.configure({ trickleSpeed: 200 });
  }



  // static getDerivedStateFromProps(props, state):
  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  // invoked right before calling the render method, both on the initial mount and on subsequent updates
  // It should return an object to update the state, or null to update nothing
  // method exists for use cases where state depends on changes in props over time.

  async getDerivedStateFromProps(nextProps) {
    const { history, location, routes, store, helpers } = this.props;
    const navigated = nextProps.location !== location;
    if (navigated) {
      const { components, match, params } = await asyncMatchRoutes(routes, nextProps.location.pathname);
      console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > getDerivedStateFromProps() > navigated?:', navigated);
    }
  }

  // componentWillReceiveProps(): invoked before a mounted component receives new props
  async componentWillReceiveProps(nextProps) {
  // async getDerivedStateFromProps(nextProps) {

    const { history, location, routes, store, helpers } = this.props;

    const navigated = nextProps.location !== location;

    if (navigated) {

      console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > navigated?:', navigated);
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

  // called each time on routing update
  render() {
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > children:', children);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > location:', location);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > previousLocation:', previousLocation);

    // use a controlled <Route> to trick all descendants into
    // rendering the old location
    // Routes are objects with the same properties as a '<Route>'
    //const voo = <Route location={previousLocation || location} render={() => children} />
    //console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > voo:', voo);

    return <Route location={previousLocation || location} render={() => children} />;
  }
}
