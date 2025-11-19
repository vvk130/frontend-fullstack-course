import { apiUrl } from "@/apiUrl";
import { handleApiErrors } from "@/utils/handleApiErrors";
import BasicForm from "./BasicForm";
import type { CompetitionCreateDto } from "@/utils/dtos";

function CompNewForm() {

    const emptyCompetitionCreateDto: CompetitionCreateDto = {
    competitionType: 'ShowJumping', 
    daysToStart: 0,                 
    daysToEnd: 1                    
    };

  return (
    <div>
      <h2>Create competition</h2>
        <BasicForm<CompetitionCreateDto>
          model={emptyCompetitionCreateDto}
          title="Create competition"
          disabledFields={[]}
          onSubmit={async (data) => {
            try {
              const res = await fetch(`${apiUrl}competitions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });
    
              const responseData = await res.json().catch(() => null);
    
              if (!res.ok || responseData?.validationErrors) {
                handleApiErrors(responseData, res.status, res.statusText);
                return;
              }
    
              alert('Updated successfully!');
            } catch (err) {
              alert('Unexpected error occurred.');
              console.error(err);
            }
          }}
        />
    </div>
  );
}

export default CompNewForm;