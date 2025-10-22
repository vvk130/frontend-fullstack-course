import BasicForm from './BasicForm';

type ThreeGuidsDto = {
  horseguid1: string;
  horseguid2: string;
  horseguid3: string;
  competitionguid4: string;
};

const initialGuids: ThreeGuidsDto = {
  horseguid1: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  horseguid2: "a62b9941-f14c-4452-8f80-1fdd6f5599f1",
  horseguid3: "3b5e43d7-94c9-4c4c-b82c-c6dd3ec0d51a",
  competitionguid4: "1b7e43d7-94c9-4c4c-b82c-c6dd3ec0d51a",
};

function GuidsForm() {
  const handleSubmit = (data: ThreeGuidsDto) => {
    console.log("Submitted GUIDs:", data);
  };

  return (
    <div>
      <h2>Enter Three horse GUIDs and competition guid to compete</h2>
      <BasicForm<ThreeGuidsDto> model={initialGuids} onSubmit={handleSubmit} />
    </div>
  );
}

export default GuidsForm;
