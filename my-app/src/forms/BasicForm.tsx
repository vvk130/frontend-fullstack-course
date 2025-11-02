import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './form.css';

type FormProps<T> = {
  model: T;
  fetchUrl?: string;
  postUrl: string;
  method?: 'POST' | 'PUT';
  title?: string;
};

async function fetchItem<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
}

export default function BasicForm<T extends object>({
  model,
  fetchUrl,
  postUrl,
  method = 'POST',
  title = 'Submit Form',
}: FormProps<T>) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<T>(model);

  const { data, isLoading } = useQuery({
    queryKey: fetchUrl ? [fetchUrl] : [],
    queryFn: fetchUrl ? () => fetchItem<T>(fetchUrl) : undefined,
    enabled: !!fetchUrl,
  });

  useEffect(() => {
    if (data) setFormData(data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (newData: T) => {
      const API_URL = 'http://localhost:5263/';
      const res = await fetch(`${API_URL}${postUrl}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });
      if (!res.ok) throw new Error(`Failed to ${method}: ${res.status}`);
      return res.json();
    },
    onSuccess: () => {
      alert(`${method === 'POST' ? 'Created' : 'Updated'} successfully!`);
      queryClient.invalidateQueries(); 
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) return <div>Loading...</div>;

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
            />
          </div>
        ))}
        <button
          type="submit"
          className="form-btn"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Saving...' : 'Submit'}
        </button>
      </form>
    </details>
  );
}
