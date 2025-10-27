import { fetchItemById } from '@/fetch';
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const AnimalRoute = createFileRoute('/animal/$animalId')({
  loader: async ({ params }) => {
    const { animalId } = params;

    const [animalType, id] = animalId.split('-') as [AnimalType, string];

    const endpoint = `api/${animalType.charAt(0).toUpperCase() + animalType.slice(1)}s/`;

    const data = await fetchItemById(endpoint, id);

    return { animalType, data };
  },
  component: AnimalRouteComponent,
});

function AnimalRouteComponent() {
  const { animalType, data } = AnimalRoute.useLoaderData() as {
    animalType: AnimalType;
    data: AnimalDtoMap[AnimalType];
  };

  const animalIdParam = `${animalType}-${data.id}`;

  return (
    <>
      <nav>
        <Link to="/animal/$animalId/info" params={{ animalId: animalIdParam }}>
          Basic Info
        </Link>
        <Link to="/animal/$animalId/foals" params={{ animalId: animalIdParam }}>
          Foals
        </Link>
        <Link to="/animal/$animalId/compstats" params={{ animalId: animalIdParam }}>
          CompStats
        </Link>
        <Link to="/animal/$animalId/update" params={{ animalId: animalIdParam }}>
          Update
        </Link>
        <Link to="/animal/$animalId/breed" params={{ animalId: animalIdParam }}>
          Breed
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export { fetchItemById };
