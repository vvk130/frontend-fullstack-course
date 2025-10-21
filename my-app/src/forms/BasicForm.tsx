import React, { useState } from 'react';
import './form.css';

type FormProps<T> = {
  model: T;
  onSubmit: (data: T) => void;
  onCancel: () => void;
};

function BasicForm<T extends object>({ model, onSubmit, onCancel }: FormProps<T>) {
  const [formData, setFormData] = useState<T>(model);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div className="form-style" key={key}>
          <label className="form-label">{key}</label>
          <input
            type="text"
            name={key}
            value={(formData as any)[key] || ''}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      ))}
      <button type="submit" className="form-btn">Submit</button>
      <button type="button" className="form-btn" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default BasicForm;

