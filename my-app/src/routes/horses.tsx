import type { HorseShortDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router';
import HorseForm from '@/forms/HorseForm';
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
    <HorseForm/>
    <HorseSearchForm/>
    <p>Here is a list of horses:</p>
    <HorsesFetch/>
  </>
);
};

function HorsesFetch() {
  return (
    <GenericPaginatedList<HorseShortDto>
      url="api/Horses/paginated?PageNumber=1&PageSize=10"
      queryKey="horses"
      renderItem={(horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
            <Link to="/horse/$horseId" params={{horseId: horse.id}}>{horse.name}</Link> — {horse.gender} — {horse.breed}
          </div>
          {horse.gender !== "Gelding" && (
            <button className="btn" id="updateButton" type="button">
              Breed
            </button>
          )}
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
