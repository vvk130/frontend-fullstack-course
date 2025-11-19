import type { CompetitionCreateDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { useItem } from '@/reusableFetch';
import { apiUrl } from '@/apiUrl';
import { handleApiErrors } from '@/utils/handleApiErrors';

export default function CompUpdateForm({ compId }: { compId: string }) {
 const { data: comp, isLoading, isError } = useItem<CompetitionCreateDto>('competitions/dto', compId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !comp) return <div>Error loading</div>;

  return (
    <BasicForm<CompetitionCreateDto>
      model={comp}
      title="Edit Competition"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}competitions/${compId}`, {
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
