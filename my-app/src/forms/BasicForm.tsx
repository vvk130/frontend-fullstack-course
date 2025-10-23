import React, { useState } from 'react';
import './form.css';

type FormProps<T> = {
  model: T;
  onSubmit: (data: T) => void;
  title?: string;
};

function BasicForm<T extends object>({ model, onSubmit, title = 'Open Form' }: FormProps<T>) {
  const [formData, setFormData] = useState<T>(model);
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleDetails = (e: React.MouseEvent<HTMLDetailsElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('form')) return;
    setOpen((prev) => !prev);
  };

  return (
    <details className="form-details" open={open} onClick={toggleDetails}>
      <summary className="form-btn">{title}</summary>
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
      </form>
    </details>
  );
}

export default BasicForm;
