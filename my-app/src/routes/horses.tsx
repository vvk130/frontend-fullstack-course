import type { AlpacaDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router';
import '../css/horses.css';
import GenericPaginatedList from '@/components/GenericPaginatedList';

export const Route = createFileRoute('/horses')({
  component: Horses,
})

function Horses() {
return (
    <>
    <h1>Horses Page</h1>
    <p>Here is a list of horses:</p>
    <HorsesFetch/>
  </>
);
};

function HorsesFetch() {
  return (
    <GenericPaginatedList<AlpacaDto>
      url="api/horses/paginated?"
      queryKey="horses"
      renderItem={(horse: AlpacaDto) => (
        <div key={horse.id} className="horse-row">
          <div className="horse-info">
          <Link
          to="/$animal/$animalId/info"
          params={{ animal: "horse", animalId: horse.id }}
        >
          {horse.id}
        </Link>
        — {horse.gender} 
          </div>
          <button className="btn" id="updateButton" type="button">
          <Link
          to="/$animal/$animalId/update"
          params={{ animal: "horse", animalId: horse.id }}
          >
            Update
            </Link>
          </button>
          <button className="btn" id="deleteButton" type="button">
          <Link
          to="/$animal/$animalId/delete"
          params={{ animal: "horse", animalId: horse.id }}
          >
            Delete
            </Link>
          </button>
        </div>
      )}
    />
  );
}
