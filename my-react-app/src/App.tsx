import React from 'react';
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { getHorses } from './api.ts'
import type { HorseListResponse, HorseShortDto } from './utils/dtos.ts'
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import AuthForm from './pages/AuthForm.tsx';
import ImgList from './pages/ImgList.tsx';

// TODO: (Maybe?) Better Paginated Queries with placeholderData

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,  
  path: '/',  
  component: () => <><AuthForm message="Sign Up" endpoint='register'/><AuthForm message="Log In" endpoint='login'/></>,  
});

const horsesRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/horses',  
  component: () => <HorsesPage />, 
});

const puzzlesRoute = createRoute({
  getParentRoute: () => rootRoute, 
  path: '/puzzles',  
  component: () => <PuzzlesPage />, 
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

const routeTree = rootRoute.addChildren([indexRoute, horsesRoute, levelsRoute, breedsRoute, puzzlesRoute]);

const router = createRouter({ routeTree });

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>      
      <RouterProvider router={router} />  
    </QueryClientProvider>
  );
};

const HorsesPage = () => (
  <div>
    <h1>Horses Page</h1>
    <h2>Breed a horse</h2>
    <h2>Search horses</h2>
    <p>Here is a list of horses:</p>
    <Horses />
  </div>
);


function Horses() {
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<HorseListResponse>({
    queryKey: ['horses'],
    queryFn: getHorses,
  });

  if (isLoading) return <div>Loading...</div>
  if (error) {
    console.error("Error fetching horses:", error);
    return <div>Error loading horses</div>;
  }

  return (
    <div>
        <p>{data?.totalCount} items found</p>
        {data?.items?.map((horse: HorseShortDto) => (
          <li key={horse.id}>
            {horse.name}
            <button id="updateButton" type="button">Update</button>
            <button id="deleteButton" type="button">Delete</button>
          </li>
        ))}
        <Pagination count={data?.totalPages} variant="outlined"/>
    </div>
  )
}

const PuzzlesPage = () => (
  <div>
    <h1>Puzzles Page</h1>
    <p>Here is a list of horses:</p>
    <ImgList/>
  </div>
);

export default App;
