

// https://github.com/mdlawson/piping

// if (process.env.NODE_ENV !== 'production') {
//   if (
//     !require('piping')({
//       hook: true,
//       ignore: /(\/\.|~$|\.json$)/i
//     })
//   ) {
//     return;
//   }
// }

require('../server.babel');
require('../api/api');
