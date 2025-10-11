import React from 'react';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,  
  path: '/',  
  component: () => <div>Hello World</div>,  
});

const horsesRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/horses',  
  component: () => <div><h1>Horses Page</h1><p>Here is a list of horses:</p></div>, 
});

const levelsRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/horses',  
  component: () => <div><h1>Levels Page</h1><p>Here is a list of levels:</p></div>, 
});

const breedsRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/horses',  
  component: () => <div><h1>Breeds Page</h1><p>Here is a list of breeds:</p></div>, 
});

const routeTree = rootRoute.addChildren([indexRoute, horsesRoute, levelsRoute, breedsRoute]);

const router = createRouter({ routeTree });

const App: React.FC = () => {
  return (
    <RouterProvider router={router} /> 
  );
};

export default App;
