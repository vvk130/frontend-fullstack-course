import type { WalletCreateDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

const newAd: WalletCreateDto = {
  money: 1500,
  ownerId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c"
};

function WalletForm() {
  const handleAdSubmit = (data: WalletCreateDto) => {
    console.log('Wallet Data Submitted:', data);
  };

  return (
    <div>
      <h2>Add money to wallet</h2>
      <BasicForm model={newAd} onSubmit={handleAdSubmit} />
    </div>
  );
}

export default WalletForm;