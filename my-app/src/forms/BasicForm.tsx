import React, { useState, useEffect } from 'react';
import './form.css';

type FormProps<T> = {
  model: T;
  onSubmit: (data: T) => void;
  title?: string;
  disabledFields?: string[];
};

export default function BasicForm<T extends object>({
  model,
  onSubmit,
  title = 'Submit Form',
  disabledFields = [],
}: FormProps<T>) {
  const [formData, setFormData] = useState<T>(model);

  useEffect(() => {
    setFormData(model);
  }, [model]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitting...');
    onSubmit(formData);
  };

  return (
    <details className="form-details" open>
      <summary className="form-btn">{title}</summary>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-style" key={key}>
            <label className="form-label">{key}</label>
            <input
              type="text"
              name={key}
              value={(formData as any)[key] ?? ''}
              onChange={handleChange}
              className="form-input"
              disabled={disabledFields.includes(key)}
            />
          </div>
        ))}
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </details>
  );
}