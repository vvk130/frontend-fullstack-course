import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { AlpacaDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/alpacas')({
  component: RouteComponent,
})

function RouteComponent() {
  return (     
  <>
    <h1>Alpacas Page</h1>
    <p>Here is a list of alpacas:</p>
    <AlpacasFetch/>
  </>
);
};


function AlpacasFetch() {
  return (
    <GenericPaginatedList<AlpacaDto>
      url="api/alpacas/paginated?"
      queryKey="alpacas"
      renderItem={(horse: AlpacaDto) => (
        <div key={horse.id} className="horse-row">
          <div className="horse-info">
          <Link
          to="/$animal/$animalId/info"
          params={{ animal: "alpaca", animalId: horse.id }}
        >
          {horse.id}
        </Link>
        — {horse.gender}
          </div>
          <button className="btn" id="updateButton" type="button">
          <Link
          to="/$animal/$animalId/update"
          params={{ animal: "alpaca", animalId: horse.id }}
          >
            Update
            </Link>
          </button>
          <button className="btn" id="deleteButton" type="button">
          <Link
          to="/$animal/$animalId/delete"
          params={{ animal: "alpaca", animalId: horse.id }}
          >
            Delete
            </Link>
          </button>
        </div>
      )}
    />
  );
}
