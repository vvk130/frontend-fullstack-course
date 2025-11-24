import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { AlpacaShortDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/myalpacas')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Your alpacas</div>
    <Link
    to="/alpaca-create"
  >
    Create alpaca
  </Link>
  <AlpacasFetch/>
  </>);
}

function AlpacasFetch() {
  return (
    <GenericPaginatedList<AlpacaShortDto>
      url="api/Alpacas/search?Filter.OwnerId=76a21e67-a81b-4df0-b03c-9290bdc3db11"
      queryKey="myalpacas"
      renderItem={(alpaca: AlpacaShortDto) => (
        <div key={alpaca.id} className="horse-row">
          <Link
            to="/$animal/$animalId/info"
            params={{ animal: "alpaca", animalId: alpaca.id}}
          >
            {alpaca.name}
          </Link> - {alpaca.id} - {alpaca.gender} - {alpaca.breed}
        </div>
      )}
    />
  );
}
