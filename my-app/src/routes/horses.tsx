import { getHorses } from '@/api';
import type { HorseListResponse, HorseShortDto } from '@/utils/dtos';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import horseGif from '../assets/horse-11591_256.gif'
import bannerImg from '../assets/bannerImg.jpg' 
import Pagination from '@mui/material/Pagination'
import HorseForm from '@/forms/HorseForm';
import HorseSearchForm from '@/forms/HorseSearchForm';

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

  if (isLoading) return <div><img src={horseGif} alt="Loading" /><img src={bannerImg} alt="Loading" /><p>Loading...</p></div>
  if (error) {
    console.error("Error fetching horses:", error);
    return <div>Error loading horses</div>;
  }

  return (
    <div>
        <p>{data?.totalCount} items found</p>
        {data?.items?.map((horse: HorseShortDto) => (
          <li key={horse.id}>
            {horse.name}
            <button id="updateButton" type="button">Update</button>
            <button id="deleteButton" type="button">Delete</button>
          </li>
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

