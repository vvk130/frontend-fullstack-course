import { useState } from 'react'

type EnumDefinition = {
  values: Record<string, string | number>
  labels: Record<string, string>
}

type EnumsMap<T> = Partial<Record<keyof T, EnumDefinition>>

export default function BasicForm<T extends Record<string, any>>({
  model,
  onSubmit,
  enums = {} as EnumsMap<T>,
  readOnlyFields = [],
}: {
  model: T
  onSubmit: (data: T) => void
  enums?: EnumsMap<T>
  readOnlyFields?: (keyof T)[]
}) {
  const [formData, setFormData] = useState<T>({ ...model })

  const handleChange = (field: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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

        if (readOnlyFields.includes(key))
          return (
            <div key={String(key)}>
              <label>{String(key)}</label>
              <input value={value as string | number | undefined} readOnly />
            </div>
          )

        if (enums[key]) {
          const { values, labels } = enums[key]!
          return (
            <div key={String(key)}>
              <label>{String(key)}</label>
              <select
                value={String(value)}
                onChange={(e) => handleChange(key, e.target.value)}
              >
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
            <input
              value={value as string | number | undefined}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        )
      })}
      <button type="submit">Save</button>
    </form>
  )
}
