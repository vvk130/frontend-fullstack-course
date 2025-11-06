import type { AlpacaDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router';
import HorseSearchForm from '@/forms/HorseSearchForm';
import '../css/horses.css';
import GenericPaginatedList from '@/components/GenericPaginatedList';

export const Route = createFileRoute('/horses')({
  component: Horses,
})

function Horses() {
return (
    <>
    <h1>Horses Page</h1>
    <h2>Breed a horse</h2>
    {/* <HorseForm/> */}
    <HorseSearchForm/>
    <p>Here is a list of horses:</p>
    <HorsesFetch/>
  </>
);
};

function HorsesFetch() {
  return (
    <GenericPaginatedList<AlpacaDto>
      url="api/Alpacas/paginated?PageNumber=1&PageSize=10"
      queryKey="horses"
      renderItem={(horse: AlpacaDto) => (
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
          <Link
          to="/$animal/$animalId"
          params={{ animal: "horse", animalId: horse.id }}
        >
          {horse.id}
        </Link>
        — {horse.gender}
          </div>
          <button className="btn" id="updateButton" type="button">
            Update
          </button>
          <button className="btn" id="deleteButton" type="button">
            Delete
          </button>
        </div>
      )}
    />
  );
}
