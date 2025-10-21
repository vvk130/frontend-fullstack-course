import React, { useState, type JSX } from 'react';

type DropdownProps = {
  label: string;
  name: string;
  options: string[]; 
  onSubmit: (selectedValue: string) => void; 
};

const Dropdown = ({ label, name, options, onSubmit }: DropdownProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(selectedValue); 
  };

  return (
    <div>
      <h1>{label}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>{label}:</label>
        <select name={name} id={name} value={selectedValue} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Dropdown;
