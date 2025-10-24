import Dropdown from '@/components/dropdown';
import GenericPaginatedList from '@/components/GenericPaginatedList';
import AdSearchForm from '@/forms/AdSearchForm';
import SalesAdForm from '@/forms/SalesAdForm';
import type { HorseShortDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/buyhorses')({
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
  {/* <AdsFetch/> */}
  </>);
}

// function AdsFetch() {
//   return (
//     <GenericPaginatedList<HorseShortDto>
//       url="/api/salesad/paginated?PageNumber=1&PageSize=10"
//       queryKey="horses"
//       renderItem={(horse: HorseShortDto) => (
//         <div key={horse.id} className="horse-row">
//           {horse.imgUrl ? (
//             <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
//           ) : (
//             <div className="no-image">No Image</div>
//           )}
//           <div className="horse-info">
//             <Link to="/horse/$horseId" params={{horseId: horse.id}}>{horse.name}</Link> — {horse.breed}
//           </div>
//           <button className="btn" id="buyButton" type="button">
//             Buy Horse
//           </button>
//         </div>
//       )}
//     />
//   );
// }
