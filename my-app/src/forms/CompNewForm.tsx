import { apiUrl } from "@/apiUrl";
import { handleApiErrors } from "@/utils/handleApiErrors";
import BasicForm from "./BasicForm";

function CompNewForm() {
  return (
    <div>
      <h2>Enter Three horse GUIDs and competition guid to compete</h2>
        <BasicForm<ThreeGuidsDto>
          model={initialGuids}
          title="Compete horses"
          disabledFields={[]}
          onSubmit={async (data) => {
            try {
              const res = await fetch(`${apiUrl}competitions/compete-horses`, {
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