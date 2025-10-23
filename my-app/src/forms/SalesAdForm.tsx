import type { SalesAdCreateDto } from "@/utils/dtos";
import BasicForm from './BasicForm';

const newAd: SalesAdCreateDto = {
  price: 1500,
  endDate: new Date("2025-12-31").toISOString(),
  horseId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",
  ownerId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c"
};

function AdForm() {
  const handleAdSubmit = (data: SalesAdCreateDto) => {
    console.log('Ad Data Submitted:', data);
  };

  return (
    <div>
      <h2>Create an ad</h2>
      <BasicForm model={newAd} onSubmit={handleAdSubmit} />
    </div>
  );
}

export default AdForm;