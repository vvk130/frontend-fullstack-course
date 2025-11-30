import GenericPaginatedList from '@/components/GenericPaginatedList';
import { SalesAdCard } from '@/components/SalesAdCard';
import AdCreateForm from '@/forms/AdCreateForm';
import type { SalesAdDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/buyhorses')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
  <>
  <h1>Market</h1>
  <p>You can buy and sell animals, you can also sell alpacas, just put the alpacaId as horseId and write Alpaca as itemType</p>
  <Link to="/buyhorsesinner">
    Horse Ads with Innerjoin
  </Link>
  <AdCreateForm/>
  <AdsFetch/>
  </>);
}

function AdsFetch() {
  return (
    <GenericPaginatedList<SalesAdDto>
      url="api/salesads/paginated?"
      queryKey="salesAds"
      renderItem={(ad) => <SalesAdCard key={ad.id} ad={ad} />}
    />
  );
}
