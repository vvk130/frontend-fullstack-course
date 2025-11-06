import GenericPaginatedList from '@/components/GenericPaginatedList';
import AdCreateForm from '@/forms/AdCreateForm';
import type { SalesDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/buyhorses')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
  <>
  <h1>Market</h1>
  <p>You can buy and sell horses</p>
  <AdCreateForm/>
  <AdsFetch/>
  </>);
}

function AdsFetch() {
  return (
    <GenericPaginatedList<SalesDto>
      url="api/salesads/paginated-with-horse?PageNumber=1&PageSize=10"
      queryKey="horses"
      renderItem={(ad: SalesDto) => (
        <div key={ad.horse.id} className="horse-row">
          {ad.horse.imgUrl ? (
            <img src={ad.horse.imgUrl} alt={ad.horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
            <Link
            to="/$animal/$animalId"
            params={{ animal: "horse", animalId: ad.horse.id}}
          >
            {ad.horse.name}
          </Link>
          — {ad.horse.breed}
          </div>
          <button className="btn" id="buyButton" type="button">
            Buy Horse for {ad.price} | {ad.type}
          </button>
        </div>
      )}
    />
  );
}
