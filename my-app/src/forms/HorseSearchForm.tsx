import type { HorseSearchDto } from "@/utils/dtos";
import BasicForm from './BasicForm';
import { Breed, Gender } from "@/utils/enums";

const newSearch: HorseSearchDto = {
  genders: [Gender.Mare],    
  breeds: [Breed.ShetlandPony],        
  minAge: 0,        
  maxAge: 5,         
  ownerId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",       
  sireId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",        
  damId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",  
};

function HorseSearchForm() {
  const handleSearchSubmit = (data: HorseSearchDto) => {
    console.log('Search Data Submitted:', data);
  };

  return (
    <div>
      <h2>Search</h2>
      <BasicForm model={newSearch} onSubmit={handleSearchSubmit} />
    </div>
  );
}

export default HorseSearchForm;