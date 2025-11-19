import GenericPaginatedList from '@/components/GenericPaginatedList';
import { SalesAdCard } from '@/components/SalesAdCard';
import AdCreateForm from '@/forms/AdCreateForm';
import type { SalesAdDto } from '@/utils/dtos';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/buyhorses')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
  <>
  <h1>Market</h1>
  <button>Resolve ads</button>
  <button>Horse Ad list with inner join</button>
  <p>You can buy and sell animals, you can also sell alpacas, just put the alpacaId as horseId and write Alpaca as itemType</p>
  <AdCreateForm/>
  <AdsFetch/>
  </>);
}

function AdsFetch() {
  return (
    <GenericPaginatedList<SalesAdDto>
      url="api/salesads/paginated?PageNumber=1&PageSize=10"
      queryKey="salesAds"
      renderItem={(ad) => <SalesAdCard key={ad.id} ad={ad} />}
    />
  );
}

/* {ad.horse.imgUrl ? (
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
</button> */

