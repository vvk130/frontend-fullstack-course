import type { SalesAdCreateDto } from "@/utils/dtos";
import BasicForm from './BasicForm';
import { apiUrl } from "@/apiUrl";
import { handleApiErrors } from "@/utils/handleApiErrors";

const ad: SalesAdCreateDto = {
  price: 1500,
  horseId: "",
  ownerId: "",
  adType: "Auction",     
  daysAdIsValid: 30,          
  itemType: "Horse",    
};

function AdCreateForm() {

  return (
    <BasicForm<SalesAdCreateDto>
      model={ad}
      title="Create Sales Ad"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}salesads/create-sales-ad`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok || responseData?.validationErrors) {
            handleApiErrors(responseData, res.status, res.statusText);
            return;
          }

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