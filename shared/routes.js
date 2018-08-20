
// https://mjrussell.github.io/redux-auth-wrapper/docs/Getting-Started/Overview.html
// https://mjrussell.github.io/redux-auth-wrapper/docs/Getting-Started/ReactRouter4.html
// https://github.com/mjrussell/redux-auth-wrapper/tree/master/examples/react-router-4
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'connected-react-router';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { App, Home, NotFound } from '../client/containers';

// dynamically imported routes
import About from '../client/containers/About/Loadable';
import AboutOne from '../client/containers/AboutOne/Loadable';
import AboutToo from '../client/containers/AboutToo/Loadable';
import AboutThree from '../client/containers/AboutThree/Loadable';
import AboutFour from '../client/containers/AboutFour/Loadable';
import Login from '../client/containers/Login/Loadable';
import Register from '../client/containers/Register/Loadable';
import LoginSuccess from '../client/containers/LoginSuccess/Loadable';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Helper 'connectedRouterRedirect' builds HOC 'isAuthenticated/isNotAuthenticated'
// config {} passed in to 'connectedRouterRedirect' determines access to route
// apply 'isAuthenticated/isNotAuthenticated' to Component(s) ('LoginSuccess' && 'Register')
// pass Component ('LoginSuccess' / 'Register') to HOC ('isAuthenticated' / 'isNotAuthenticated')
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const isAuthenticated = connectedReduxRedirect({
  // url to redirect if check fails
  redirectPath: '/login',
  // If authenticatedSelector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatedSelector: state => state.auth.user !== null,
  // dispatch a redux action to navigate - pass the redux action creator to redirectAction
  redirectAction: routerActions.replace,          
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  // url to redirect if check fails
  redirectPath: '/',
  // If authenticatedSelector is true, wrapper will not redirect
  authenticatedSelector: state => state.auth.user === null,
  // dispatch a redux action to navigate - pass the redux action creator to redirectAction
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  // prevent adding the query parameter when we send the user away from the Register page
  allowRedirectBack: false
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const routes = [{
  component: App,
  routes: [
    { path: '/', exact: true, component: Home },
    { path: '/about', component: About },
    { path: '/about-one', component: AboutOne },
    { path: '/about-too', component: AboutToo },
    { path: '/about-three', component: AboutThree },
    { path: '/about-four', component: AboutFour },
    { path: '/login', component: Login },
    { path: '/login-success', component: isAuthenticated(LoginSuccess) },
    { path: '/register', component: isNotAuthenticated(Register) },
    { component: NotFound },
  ],
}];

export default routes;
