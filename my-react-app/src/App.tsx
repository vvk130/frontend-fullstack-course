import React from 'react';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { getHorses } from './api.ts'
import type { HorseShortDto } from './utils/dtos.ts'

// TODO: Better Paginated Queries with placeholderData

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
  path: '/levels',  
  component: () => <div><h1>Levels Page</h1><p>Here is a list of levels:</p></div>, 
});

const breedsRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/breeds',  
  component: () => <div><h1>Breeds Page</h1><p>Here is a list of breeds:</p></div>, 
});

const routeTree = rootRoute.addChildren([indexRoute, horsesRoute, levelsRoute, breedsRoute]);

const router = createRouter({ routeTree });

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>      
      <RouterProvider router={router} />  
        <Horses />
    </QueryClientProvider>
  );
};

function Horses() {
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<HorseShortDto[]>({
    queryKey: ['horses'],
    queryFn: getHorses,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading</div>

  return (
    <div>
      <ul>
        {data?.map((horse: HorseShortDto) => (
          <li key={horse.id}>
            {horse.name} {horse.imgUrl}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App;
