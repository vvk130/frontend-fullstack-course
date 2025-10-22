import BasicForm from './BasicForm';

type Guid = {
  horseguid1: string;
};

const initialGuid: Guid = {
  horseguid1: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
};

function CheckResultsForm() {
  const handleSubmit = (data: Guid) => {
    console.log("Submitted GUIDs:", data);
  };

  return (
    <div>
      <h2>Check Results for your horse</h2>
      <BasicForm<Guid> model={initialGuid} onSubmit={handleSubmit} />
    </div>
  );
}

export default CheckResultsForm;
