import { createFileRoute, Link } from '@tanstack/react-router'
import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { HorseShortDto } from '@/utils/dtos';

export const Route = createFileRoute('/myhorses/all')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HorsesFetch/>
}

function HorsesFetch() {
  return (
    <GenericPaginatedList<HorseShortDto>
      url="api/Horses/search?Filter.OwnerId=76a21e67-a81b-4df0-b03c-9290bdc3db11"
      queryKey="myhorses"
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
