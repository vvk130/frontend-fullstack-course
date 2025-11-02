import type { AlpacaDto } from '@/utils/dtos';
import { useItem } from '@/reusableFetch';
import BasicForm from './BasicForm';

export default function AlpacaForm({ alpacaId }: { alpacaId: string }) {
  const { data: alpaca, isLoading, isError, mutation } = useItem<AlpacaDto>('alpacas', alpacaId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !alpaca) return <div>Error loading</div>;

  return (
  <BasicForm<AlpacaDto>
    model={alpaca}
    postUrl={`alpacas/${alpacaId}`}
    method="PUT"
    title="Edit Alpaca"
    disabledFields={['id', 'ownerId']}
  />
  );
}
