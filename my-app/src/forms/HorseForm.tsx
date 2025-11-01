import type { HorseEditDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

const initialHorse: HorseEditDto = {
  id: '',
  name: '',
  imgUrl: ''
};

function HorseForm() {
  const handleHorseSubmit = (data: HorseEditDto) => {
    alert('Horse Data Submitted: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>Edit a horse</h2>
      <BasicForm model={initialHorse} onSubmit={handleHorseSubmit} />
    </div>
  );
}

export default HorseForm;
