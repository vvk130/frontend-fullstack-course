import Dropdown from '@/components/dropdown';
import SalesAdForm from '@/forms/SalesAdForm';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/market')({
  component: RouteComponent,
})

function RouteComponent() {
  function handleHorseSelectionSubmit(_selectedValue: string): void {
    throw new Error('Function not implemented.');
  }

  return (
  <>
  <h1>Market</h1>
  <p>You can buy and sell horses</p>
  <Dropdown
  label="Choose a horse to sell"
  name="horses"
  options={['Volvo', 'Saab', 'Opel', 'Audi']}
  onSubmit={handleHorseSelectionSubmit}
  />
  <SalesAdForm/>
  </>);
}