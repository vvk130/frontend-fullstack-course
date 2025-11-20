import BasicForm from './BasicForm';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';
import type { HorseCreateDto } from '@/routes/horse-create';

export default function HorseCreateForm() {
    const newHorse: HorseCreateDto = {
    id: "user123",
    breed: "Arabian", 
    };

  return (
    <BasicForm<HorseCreateDto>
      model={newHorse}
      title="Create a horse for user"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}Horses/create-horse`, {
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
