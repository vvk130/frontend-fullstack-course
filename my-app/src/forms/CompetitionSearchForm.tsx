import type { CompetitionSearchDto } from "@/utils/dtos";
import BasicForm from './BasicForm';

const newSearch: CompetitionSearchDto = {
    endTimeAfter: new Date("2025-12-31T23:59:59Z"),
};

function CompetitionSearchForm() {
  const handleSearchSubmit = (data: CompetitionSearchDto) => {
    console.log('Search Data Submitted:', data);
  };

  return (
    <div>
      <h2>Search</h2>
      <BasicForm model={newSearch} onSubmit={handleSearchSubmit} />
    </div>
  );
}

export default CompetitionSearchForm;