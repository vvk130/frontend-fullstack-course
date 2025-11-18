import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { AnimalDto } from '@/utils/dtos';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myalpacas')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Your alpacas</div>
  <AlpacasFetch/>
  </>);
}

function AlpacasFetch() {
  return (
    <GenericPaginatedList<AnimalDto>
      url="api/Alpacas/search?Filter.OwnerId=f47ac10b-58cc-4372-a567-0e02b2c3d479&Pagination.PageNumber=1&Pagination.PageSize=10"
      queryKey="alpacas"
      renderItem={(animal: AnimalDto) => (
        <div key={animal.id} className="horse-row">
          {animal.id}
        </div>
      )}
    />
  );
}
