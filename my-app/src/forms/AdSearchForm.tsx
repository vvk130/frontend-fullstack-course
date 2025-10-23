import type { AdSearchDto } from "@/utils/dtos";
import BasicForm from './BasicForm';
import { Breed, Gender } from "@/utils/enums";

const newSearch: AdSearchDto = {
  genders: [Gender.Mare],    
  breeds: [Breed.ShetlandPony],        
  minAge: 0,        
  maxAge: 5,         
  ownerId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",       
  sireId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",        
  damId: "d2719d3f-e4fc-4c8f-bf1d-6e2c75b4768c",
  maxPrice: 10000,
  endTimeAfter: new Date("2025-12-31T23:59:59Z"),
};

function AdSearchForm() {
  const handleSearchSubmit = (data: AdSearchDto) => {
    console.log('Search Data Submitted:', data);
  };

  return (
    <div>
      <h2>Search</h2>
      <BasicForm model={newSearch} onSubmit={handleSearchSubmit} />
    </div>
  );
}

export default AdSearchForm;