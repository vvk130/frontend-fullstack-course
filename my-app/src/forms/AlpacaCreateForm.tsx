import BasicForm from './BasicForm';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';
import type { AlpacaCreateDto } from '@/routes/alpaca-create';

export default function HorseCreateForm() {
    const newAlpaca: AlpacaCreateDto = {
    id: "Add Guid from bar under navigation",
    alpacaBreed: "Unknown", 
    };

  return (
    <BasicForm<AlpacaCreateDto>
      model={newAlpaca}
      title="Create a alpaca for user"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}Horses/create-alpaca`, {
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
