import type { HorseDto } from "@/utils/dtos";
import BasicForm from "./BasicForm";
import { useItem } from "@/reusableFetch";

export default function HorseForm({ horseId }: { horseId: string }) {
  const { data: horse, isLoading, isError, mutation } = useItem<HorseDto>('horses', horseId);

  if (isLoading) return <div>Loading horse...</div>;
  if (isError || !horse) return <div>Error loading horse.</div>;

  return (
    <BasicForm<HorseDto>
      model={horse}
      title="Edit Horse"
      disabledFields={[
        'id',
        'breed',
        'gender',
        'age',
        'color',
        'capacity',
        'relationship',
        'energy',
        'height',
        'ownerId',
        'sireId',
        'damId',
        'qualities',
        'fears',
        'personalities',
      ]}
      onSubmit={(data) => 
        mutation.mutate(data, {
          onError: (error: any) => {
            alert(
              `Error: ${error.title}\n` +
              Object.entries(error.errors)
                .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                .join('\n')
            );
          },
          onSuccess: () => {
            alert('Updated successfully!');
          }
        })
      }
    />
  );
}
