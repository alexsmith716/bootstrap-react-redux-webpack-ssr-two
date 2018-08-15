
// import { routerReducer } from 'connected-react-router';
// 
// import auth from './modules/auth';
// import notifs from './modules/notifs';
// import info from './modules/info';
// 
// export default function createReducers(asyncReducers) {
// 
//   return {
//     router: routerReducer, // Add 'routerReducer' to store on the `router` key
//     online: (v = true) => v,
//     notifs,
//     auth,
//     info,
//     ...asyncReducers,
//   };
// 
// }

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
