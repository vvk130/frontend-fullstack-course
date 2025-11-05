import type { SalesAdCreateDto } from "@/utils/dtos";
import BasicForm from './BasicForm';
import { apiUrl } from "@/apiUrl";
import { AdType, ItemType } from "@/utils/enums";

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

          if (!res.ok) {
            if (responseData?.errors) {
              alert(
                `${responseData.title}\n` +
                Object.entries(responseData.errors)
                  .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                  .join('\n')
              );
            } else {
              alert(`Error ${res.status}: ${res.statusText}`);
            }
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