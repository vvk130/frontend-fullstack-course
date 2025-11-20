import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { HorseShortDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/myhorses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Your horses</div>
  <Link
    to="/horse-create"
  >
    Create horse
  </Link>
  <HorsesFetch/>
  </>);
}

function HorsesFetch() {
  return (
    <GenericPaginatedList<HorseShortDto>
      url="api/Horses/search?Filter.OwnerId=76a21e67-a81b-4df0-b03c-9290bdc3db11"
      queryKey="horses"
      renderItem={(horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          <Link
            to="/$animal/$animalId/info"
            params={{ animal: "horse", animalId: horse.id}}
          >
            {horse.name}
          </Link> - {horse.id} - {horse.gender} - {horse.breed}
        </div>
      )}
    />
  );
}
