import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { AdInnerJoinDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/buyhorsesinner')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <AdsFetch/>
  </div>
}

function AdsFetch() {
  return (
    <GenericPaginatedList<AdInnerJoinDto>
      url="api/salesads/paginated-with-horse?"
      queryKey="salesAds-innejoin"
      renderItem={(ad) => (
        <div key={ad.id} className="ad-card">
          <h3>{ad.horse.name}</h3>

          <p><b>Breed:</b> {ad.horse.breed}</p>
          <p><b>Gender:</b> {ad.horse.gender}</p>

          <p><b>Ad Type:</b> {ad.type}</p>
          <p><b>Price:</b> {ad.price}</p>

          <p><b>Ends:</b> {new Date(ad.endTime).toLocaleString()}</p>

          <p><b>Owner ID:</b> {ad.ownerId}</p>

          <p><b>Horse ID:</b> {ad.horse.id}</p>
            <Link
            to="/ad/$adId/update"
            params={{ adId: ad.id }}
        >
            Buy /bid for {ad.price}
            </Link>
        </div>
      )}
    />
  );
}
