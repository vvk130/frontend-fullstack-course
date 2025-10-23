import { getHorses } from '@/api';
import type { HorseListResponse, HorseShortDto } from '@/utils/dtos';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router'
import horseGif from '../assets/horse-11591_256.gif'
import Pagination from '@mui/material/Pagination'
import HorseForm from '@/forms/HorseForm';
import HorseSearchForm from '@/forms/HorseSearchForm';
import '../css/horses.css';

export const Route = createFileRoute('/horses')({
  component: Horses,
})

function Horses() {
return (
    <>
    <h1>Horses Page</h1>
    <h2>Breed a horse</h2>
    <HorseForm/>
    <HorseSearchForm/>
    <p>Here is a list of horses:</p>
    <HorsesFetch/>
  </>
);
};

function HorsesFetch() {

  const { data, isLoading, error } = useQuery<HorseListResponse>({
    queryKey: ['horses'],
    queryFn: getHorses,
  });

  if (isLoading) return <div><img src={horseGif} alt="Loading" /><p>Loading...</p></div>
  if (error) {
    console.error("Error fetching horses:", error);
    return <div>Error loading horses</div>;
  }

  return (
    <div>
        <p>{data?.totalCount} items found</p>
        {data?.items?.map((horse: HorseShortDto) => (
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}

          <div className="horse-info">
            <Link to="/horse/$horseId" params={{horseId: horse.id}}>{horse.name}</Link> — {horse.breed}
          </div>

          <button className="btn" id="updateButton" type="button">
            Update
          </button>
          <button className="btn" id="deleteButton" type="button">
            Delete
          </button>
        </div>
        ))}
        <Pagination count={data?.totalPages} variant="outlined"/>
    </div>
  )
}

// const PuzzlesPage = () => (
//   <div>
//     <h1>Puzzles Page</h1>
//     <p>Here is a list of horses:</p>
//     <ImgList/>
//   </div>
// );

