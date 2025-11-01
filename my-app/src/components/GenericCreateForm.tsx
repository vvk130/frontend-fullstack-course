import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import BasicForm from './BasicForm'
import { modelRegistry } from '@/utils/modelRegistry'

type GenericCreateFormProps<T extends object> = {
  modelKey: keyof typeof modelRegistry
  onSuccess?: () => void
}

export default function GenericCreateForm<T extends object>({ modelKey, onSuccess }: GenericCreateFormProps<T>) {
  const registryEntry = modelRegistry[modelKey as string]!
  const { endpoint, sample, enums } = registryEntry

  const [formData, setFormData] = useState<T>(sample as T)

  const mutation = useMutation({
    mutationFn: async (data: T) => {
      const res = await fetch(`http://localhost:5263/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to create item')
      return res.json()
    },
    onSuccess,
  })

  if (mutation.status === 'pending') return <div>Creating...</div>
  if (mutation.status === 'error') return <div>Error: {(mutation.error as Error).message}</div>

  return (
    <BasicForm<T>
      model={formData}
      onSubmit={(data) => mutation.mutate(data)}
      enums={enums}
    />
  )
}
