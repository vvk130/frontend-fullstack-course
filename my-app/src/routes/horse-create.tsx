import HorseCreateForm from '@/forms/HorseCreateForm';
import type { Breed } from '@/utils/enums';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse-create')({
  component: RouteComponent,
})

export interface HorseCreateDto {
  id: string;       
  breed: keyof typeof Breed;        
}

function RouteComponent() {
  return (
  <><HorseCreateForm/></>
  );
}

