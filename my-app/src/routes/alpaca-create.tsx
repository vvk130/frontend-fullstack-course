import AlpacaCreateForm from '@/forms/AlpacaCreateForm';
import type { AlpacaBreed } from '@/utils/enums';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/alpaca-create')({
  component: RouteComponent,
})

export interface AlpacaCreateDto {
  id: string;       
  alpacaBreed: keyof typeof AlpacaBreed;        
}

function RouteComponent() {
  return (
  <><AlpacaCreateForm/></>
  );
}

