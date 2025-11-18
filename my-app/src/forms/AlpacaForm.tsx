import type { AlpacaDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { useItem } from '@/reusableFetch';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';

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
          const res = await fetch(`${apiUrl}alpacas/${alpacaId}`, {
            method: 'PUT',
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
