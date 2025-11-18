import { apiUrl } from '@/apiUrl';
import BasicForm from './BasicForm';
import { handleApiErrors } from '@/utils/handleApiErrors';

type ThreeGuidsDto = {
  competitionId: string;
  horseId1: string;
  horseId2: string;
  horseId3: string;
};

const initialGuids: ThreeGuidsDto = {
  competitionId: "1b7e43d7-94c9-4c4c-b82c-c6dd3ec0d51a",
  horseId1: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  horseId2: "a62b9941-f14c-4452-8f80-1fdd6f5599f1",
  horseId3: "3b5e43d7-94c9-4c4c-b82c-c6dd3ec0d51a",
};

function GuidsForm() {

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

export default GuidsForm;
