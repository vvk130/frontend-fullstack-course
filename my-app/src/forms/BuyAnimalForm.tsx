import type { BuyAdDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';

export default function BuyAnimalForm({ adId }: { adId: string }) {
    const emptyBuyAd: BuyAdDto = {
    buyerId: '',     
    adId: adId,       
    itemType: 'Horse', 
    bid: 0,        
    };

  return (
    <BasicForm<BuyAdDto>
      model={emptyBuyAd}
      title="Buy an item"
      disabledFields={['adId']}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}salesads/buy-horse`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok || responseData?.validationErrors) {
            handleApiErrors(responseData, res.status, res.statusText);
            return;
          }

          alert('Updated successfully!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}
