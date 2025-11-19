import type { SalesAdDto } from "@/utils/dtos";
import { Link } from "@tanstack/react-router";

export function SalesAdCard({ ad }: { ad: SalesAdDto }) {
  const animalId = ad.horseId;
  const type = ad.itemType?.toLowerCase();
  const animalType = type === "horse" ? "horse" : "alpaca";
  const adId = ad.id;

  return (
    <div className="sales-ad-card">
      <div className="sales-ad-header">
        <h3>Ad #{ad.id.slice(0, 6)}</h3>
        <span className="ad-type">{ad.adType}</span>
      </div>

      <div className="sales-ad-body">
        <p>
          <strong>{animalType}:</strong>{" "}
          <Link
            to="/$animal/$animalId/info"
            params={{ animal: animalType, animalId }}
          >
            {animalId}
          </Link>
        </p>

        <p><strong>Price:</strong> {ad.price} coins</p>
        <p><strong>Ends:</strong> {new Date(ad.endTime).toLocaleString()}</p>
      </div>

      <div className="sales-ad-footer">
        <button className="buy-btn">
            <Link
            to="/ad/$adId"
            params={{ adId }}
          >
          Buy /bid for {ad.price}
          </Link>
        </button>
      </div>
    </div>
  );
}
