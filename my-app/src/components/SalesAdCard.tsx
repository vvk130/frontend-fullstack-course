import type { SalesAdDto } from "@/utils/dtos";
import { Link } from "@tanstack/react-router";

export function SalesAdCard({ ad }: { ad: SalesAdDto }) {
  const animalId = ad.horseId;
  const type = ad.itemType?.toLowerCase();
  const animal = type === "horse" ? "horse" : "alpaca";
  const adId = ad.id;

  return (
    <div className="sales-ad-card">
        Ad #{ad.id} || <span className="ad-type">{ad.adType}</span> || 
          <strong>{animal}:</strong>{" "}
          <Link
            to="/$animal/$animalId/info"
            params={{ animal: animal, animalId }}
          >
            {animalId}
          </Link> || 
        <strong>Price:</strong> {ad.price} coins || <strong>Ends:</strong> {new Date(ad.endTime).toLocaleString()}
        <button className="buy-btn">
            <Link
            to="/ad/$adId/update"
            params={{ adId }}
          >
          Buy /bid for {ad.price}
          </Link>
          </button>
           <button className="buy-btn">
          <Link
            to="/ad/$adId/delete"
            params={{ adId }}
          >
          Delete
          </Link>
    </button>
    </div>
  );
}
