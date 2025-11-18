import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { HorseShortDto } from '@/utils/dtos';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myhorses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Your horses</div>
  <HorsesFetch/>
  </>);
}

function HorsesFetch() {
  return (
    <GenericPaginatedList<HorseShortDto>
      url="api/Horses/search?Filter.OwnerId=03514f70-08c2-429b-9f17-ca992ac4b93a&Pagination.PageNumber=1&Pagination.PageSize=10"
      queryKey="horses"
      renderItem={(horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          {horse.id}
        </div>
      )}
    />
  );
}
