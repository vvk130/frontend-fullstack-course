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
  const storedUserId = localStorage.getItem('horseappinfo.userId') || null;

  return (
    <GenericPaginatedList<HorseShortDto>
      url={`api/Horses/search?Filter.OwnerId=${storedUserId}`}
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
