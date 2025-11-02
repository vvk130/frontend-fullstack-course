import type { HorseDto } from '@/utils/dtos';
import { useItem } from '@/reusableFetch';
import BasicForm from './BasicForm';

export default function HorseForm({ horseId }: { horseId: string }) {
  const { data: horse, isLoading, isError, mutation } = useItem<HorseDto>('horses', horseId);

  if (isLoading) return <div>Loading horse...</div>;
  if (isError || !horse) return <div>Error loading horse.</div>;

  return (
    <BasicForm<HorseDto>
      model={horse}
      onSubmit={(data) => mutation.mutate(data)}
      title="Edit Horse"
      disabledFields={['id', 'ownerId']} 
    />
  );
}
