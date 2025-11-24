import type { AdDto, BuyAdDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';
import { useItem } from '@/reusableFetch';
import { useQueryClient } from '@tanstack/react-query';

export default function BuyAnimalForm({ adId }: { adId: string }) {
    const queryClient = useQueryClient();
    const { data: ad, isLoading, isError } = useItem<AdDto>('salesads', adId);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !ad) return <div>Error loading</div>;
    
    const emptyBuyAd: BuyAdDto = {
    buyerId: '',
    adId: ad.id,
    itemType: 'Horse',
    bid: ad.price,
    };

  return (
    <BasicForm<BuyAdDto>
      model={emptyBuyAd}
      title="Buy an item"
      disabledFields={['adId']}
      onSubmit={async (data) => {
        const storedWalletId = localStorage.getItem('horseappinfo.walletId') || null;

        try {
          const res = await fetch(`${apiUrl}salesads/buy-horse`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok || (responseData?.validationErrors && Object.keys(responseData.validationErrors).length > 0)) {
            handleApiErrors(responseData, res.status, res.statusText);
            return;
          }

          if (storedWalletId) {
            queryClient.invalidateQueries({ queryKey: ['wallet-balance', storedWalletId] });
          }

          const message = responseData?.message || "Form submitted successfully!";
          alert(message);

        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}






