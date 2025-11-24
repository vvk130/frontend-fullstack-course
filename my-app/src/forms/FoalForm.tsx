import BasicForm from './BasicForm';
import { apiUrl } from '@/apiUrl';
import type { FoalCreateDto } from '@/utils/dtos';
import { handleApiErrors } from '@/utils/handleApiErrors';

export default function FoalForm() {
    
    const newFoal: FoalCreateDto = {
    sireId: "add Guid",
    damId: "add Guid",
    type: "Horse", 
    };

  return (
    <BasicForm<FoalCreateDto>
      model={newFoal}
      title="Breed horses or alpacas"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}Foals`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok || responseData?.validationErrors) {
            handleApiErrors(responseData, res.status, res.statusText);
            return;
          }

          alert('Foal created successfully!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}