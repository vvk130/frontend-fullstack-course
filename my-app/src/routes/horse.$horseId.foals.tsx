import GenericPaginatedList from '@/components/GenericPaginatedList'
import type { HorseShortDto } from '@/utils/dtos'
import { createFileRoute, Link, useLoaderData, useParams} from '@tanstack/react-router'
import {Route as ParentRoute} from '@/routes/animal.$animalId'

export const Route = createFileRoute('/horse/$horseId/foals')({
  component: RouteComponent,
})

function RouteComponent() {
  const horse = ParentRoute.useLoaderData()

  const endpoint =
    horse.gender === 'Mare'
      ? `api/Horses/search?Filter.SireId=${horse.id}`
      : `api/Horses/search?Filter.SireId=${horse.id}`

  return (<>
  <h1>Foals</h1>
  <FoalsFetch endpoint={endpoint}/>
  </>)
}

function FoalsFetch({ endpoint }: { endpoint: string }) {

  return (
    <GenericPaginatedList<HorseShortDto>
      url={endpoint}
      queryKey="foals"
      renderItem={(horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
            <Link to="/horse/$horseId" params={{horseId: horse.id}}>{horse.name}</Link> — {horse.breed}
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
