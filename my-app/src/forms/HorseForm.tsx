import type { HorseShortDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

const initialHorse: HorseShortDto = {
  id: '',
  name: '',
  imgUrl: '',
  breed: 'Unknown'
};

function HorseForm() {
  const handleHorseSubmit = (data: HorseShortDto) => {
    console.log('Horse Data Submitted:', data);
  };

  return (
    <div>
      <h2>Edit a horse</h2>
      <BasicForm model={initialHorse} onSubmit={handleHorseSubmit} />
    </div>
  );
}

export default HorseForm;
