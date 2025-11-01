import { useState } from 'react'

export default function BasicForm<T extends object>({
  model,
  onSubmit,
  enums = {},
  readOnlyFields = [],
}: {
  model: T
  onSubmit: (data: T) => void
  enums?: Record<string, { values: Record<string, string>; labels: Record<string, string> }>
  readOnlyFields?: string[]
}) {
  const [formData, setFormData] = useState<T>(model)

  const handleChange = (field: keyof T, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(formData)
      }}
    >
      {(Object.keys(model) as (keyof T)[]).map((key) => {
        const value = formData[key]

        if (readOnlyFields.includes(String(key)))
          return (
            <div key={String(key)}>
              <label>{String(key)}</label>
              <input value={value ?? ''} readOnly />
            </div>
          )

        if (enums[key as string]) {
          const { values, labels } = enums[key as string]
          return (
            <div key={String(key)}>
              <label>{String(key)}</label>
              <select value={value as string} onChange={(e) => handleChange(key, e.target.value)}>
                {Object.keys(values).map((k) => (
                  <option key={k} value={k}>
                    {labels[k]}
                  </option>
                ))}
              </select>
            </div>
          )
        }

        return (
          <div key={String(key)}>
            <label>{String(key)}</label>
            <input value={value ?? ''} onChange={(e) => handleChange(key, e.target.value)} />
          </div>
        )
      })}
      <button type="submit">Save</button>
    </form>
  )
}
