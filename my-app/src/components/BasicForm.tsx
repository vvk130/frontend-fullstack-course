import { useState, useEffect } from 'react'

type EnumDefinition = {
  values: Record<string, string | number>
  labels: Record<string, string>
}

type EnumsMap<T> = Partial<Record<keyof T, EnumDefinition>>

interface BasicFormProps<T> {
  model: T
  onSubmit: (data: T) => void
  enums?: EnumsMap<T>
  readOnlyFields?: (keyof T)[]
}

export function BasicForm<T extends Record<string, any>>({
  model,
  onSubmit,
  enums = {},
  readOnlyFields = [],
}: BasicFormProps<T>) {
  const [formData, setFormData] = useState<T>({ ...model })

  useEffect(() => {
    setFormData(model)
  }, [model])

  const handleChange = (key: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(formData)
      }}
    >
      {Object.entries(formData).map(([key, value]) => {
        const typedKey = key as keyof T

        if (readOnlyFields.includes(typedKey)) {
          return (
            <div key={key}>
              <label>{key}</label>
              <input value={value ?? ''} readOnly />
            </div>
          )
        }

        if (enums[typedKey]) {
          const { values, labels } = enums[typedKey]!
          return (
            <div key={key}>
              <label>{key}</label>
              <select
                value={value ?? ''}
                onChange={(e) => handleChange(typedKey, e.target.value)}
              >
                {Object.entries(values).map(([k]) => (
                  <option key={k} value={k}>
                    {labels[k] ?? k}
                  </option>
                ))}
              </select>
            </div>
          )
        }

        return (
          <div key={key}>
            <label>{key}</label>
            <input
              value={value ?? ''}
              onChange={(e) => handleChange(typedKey, e.target.value)}
            />
          </div>
        )
      })}
      <button type="submit">Save</button>
    </form>
  )
}
