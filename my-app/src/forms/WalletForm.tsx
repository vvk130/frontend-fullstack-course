import type { WalletCreateDto } from '@/utils/dtos';
import BasicForm from './BasicForm';
import { handleApiErrors } from '@/utils/handleApiErrors';
import { apiUrl } from '@/apiUrl';

const walletUpdate: WalletCreateDto = {
  balance: 0,
  ownerId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c"
};

export default function WalletForm() {
  const storedWalletId = localStorage.getItem('horseappinfo.walletId') || '';

  return (
    <BasicForm<WalletCreateDto>
      model={walletUpdate}
      title="Update your wallet balance"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrl}wallet/${storedWalletId}`, {
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
