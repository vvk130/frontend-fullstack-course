import type { AlpacaDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { useItem } from '@/reusableFetch';

export default function AlpacaForm({ alpacaId }: { alpacaId: string }) {
 const { data: alpaca, isLoading, isError } = useItem<AlpacaDto>('alpacas', alpacaId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !alpaca) return <div>Error loading</div>;

  return (
    <BasicForm<AlpacaDto>
      model={alpaca}
      title="Edit Alpaca"
      disabledFields={['id', 'sireId', 'damId', 'personalities', 'alpacaQualities', 'alpacaColor', 'alpacaBreed']}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`http://localhost:5263/api/alpacas/${alpacaId}`, {
            method: 'PUT',
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

          alert('Updated successfully!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}
