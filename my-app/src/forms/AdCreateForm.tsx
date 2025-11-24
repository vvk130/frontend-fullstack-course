import type { SalesAdCreateDto } from "@/utils/dtos";
import BasicForm from './BasicForm';
import { apiUrl } from "@/apiUrl";
import { handleApiErrors } from "@/utils/handleApiErrors";
import { useQueryClient } from "@tanstack/react-query";

function AdCreateForm() {
  const queryClient = useQueryClient();
  const storedUserId = localStorage.getItem('horseappinfo.userId') || null;

  const ad: SalesAdCreateDto = {
  price: 1500,
  horseId: "",
  ownerId: storedUserId ?? "",
  adType: "NormalAd",     
  daysAdIsValid: 30,          
  itemType: "Horse",    
  };

  return (
    <BasicForm<SalesAdCreateDto>
      model={ad}
      title="Create Sales Ad"
      disabledFields={[]}
      onSubmit={async (data) => {
        const storedWalletId = localStorage.getItem('horseappinfo.walletId') || null;

        try {
          const res = await fetch(`${apiUrl}salesads/create-sales-ad`, {
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
          queryClient.invalidateQueries({ queryKey: ['salesAds'] });
          
          alert('Created successfully!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}

export default AdCreateForm;



