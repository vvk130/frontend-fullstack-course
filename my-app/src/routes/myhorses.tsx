import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { HorseShortDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/myhorses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Hello "/myhorses"!</div>
  <HorsesFetch/>
  </>);
}

function HorsesFetch() {
  return (
    <GenericPaginatedList<HorseShortDto>
      url="api/Horses/search?Filter.OwnerId=f47ac10b-58cc-4372-a567-0e02b2c3d479&Pagination.PageNumber=1&Pagination.PageSize=10"
      queryKey="horses"
      renderItem={(horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          {horse.id}
        </div>
      )}
    />
  );
}
