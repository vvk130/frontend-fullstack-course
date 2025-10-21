import type { HorseShortDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

const initialHorse: HorseShortDto = {
  id: '',
  name: '',
  imgUrl: '',
};

function HorseForm() {
  const handleHorseSubmit = (data: HorseShortDto) => {
    console.log('Horse Data Submitted:', data);
  };

  const handleCancel = () => {
    console.log('Form Cancelled');
  };

  return (
    <div>
      <h2>Edit a horse</h2>
      <BasicForm model={initialHorse} onSubmit={handleHorseSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default HorseForm;
