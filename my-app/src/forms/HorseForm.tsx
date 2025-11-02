import type { HorseDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

export default function HorseForm({ horseId }: { horseId: string }) {
  const initialHorse: HorseDto = {
  id: '',
  name: '',
  imgUrl: null,
  breed: 'Arabian',
  gender: 'Mare',
  age: 0,
  color: '',
  capacity: 0,
  relationship: 0,
  energy: 0,
  height: 0,
  ownerId: '',
  sireId: null,
  damId: null,
  qualities: {
    strength: 0,
    agility: 0,
    endurance: 0,
    speed: 0,
    intelligence: 0,
    stamina: 0,
    jumpingAbility: 0,
  },
  fears: [],
  personalities: [],
};


  return (
    <BasicForm<HorseDto>
      model={initialHorse}
      fetchUrl={`http://localhost:5263/api/horses/${horseId}`}
      postUrl={`api/horses/${horseId}`}
      method="PUT"
      title="Edit Horse"
    />
  );
}
