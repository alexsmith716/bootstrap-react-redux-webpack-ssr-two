
// Keep state in sync with router
// dispatch navigation actions 
import { routerReducer } from 'react-router-redux';

// import multireducer from 'multireducer';

import auth from './modules/auth';
import notifs from './modules/notifs';
import info from './modules/info';


export default function createReducers(asyncReducers) {

  return {

    router: routerReducer, // Add 'routerReducer' to store on the `router` key

    online: (v = true) => v,

    notifs,

    auth,

    info,

    ...asyncReducers,

  };
}
