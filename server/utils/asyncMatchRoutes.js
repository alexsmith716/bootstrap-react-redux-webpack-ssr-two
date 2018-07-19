import { matchRoutes } from 'react-router-config';

// 'react-router-config' (Static route configuration helpers for React Router):
//    With the introduction of React Router v4, there is no longer a centralized route configuration. 
//    There are some use-cases where it is valuable to know about all the app's potential routes such as:
//    
//    - Loading data on the server or in the lifecycle before rendering the next screen
//    - Linking to routes by name
//    - Static analysis

function getComponents(match) {
  return match.map(v => v.route.component).reduce(async (result, component) => {
    if (component.preload) {
      const res = await component.preload();
      const ret = [...(await result), component, ...[].concat(res)];
      return ret;
    }
    return [...(await result), component];
  }, []);
}

function getParams(match) {
  return match.reduce((result, component) => {
    if (component.match && component.match.params) {
      return { ...result, ...component.match.params };
    }
    return result;
  }, {});
}

const asyncMatchRoutes = async (routes, pathname) => {

  const match = matchRoutes(routes, pathname); // Returns array of matched routes
  const components = await getComponents(match);
  const params = getParams(match);

  console.log('>>>>>>>>>>>>>>>> asyncMatchRoutes > asyncMatchRoutes > components: ', components);
  console.log('>>>>>>>>>>>>>>>> asyncMatchRoutes > asyncMatchRoutes > matchRoutes: ', match);
  console.log('>>>>>>>>>>>>>>>> asyncMatchRoutes > asyncMatchRoutes > params: ', params);

  return { components, match, params };
};

export default asyncMatchRoutes;
