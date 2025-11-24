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
  const storedUserId = localStorage.getItem('horseappinfo.userId') || null;

  return (
    <GenericPaginatedList<AlpacaShortDto>
      url={`api/Alpacas/search?Filter.OwnerId=${storedUserId}`}
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
