import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import BasicForm from './BasicForm'
import { modelRegistry } from '@/utils/modelRegistry'
import { useParams } from '@tanstack/react-router'

type GenericEditFormProps<T extends object> = {
  modelKey: keyof typeof modelRegistry
  onSuccess?: () => void
}

export default function GenericEditForm<T extends object>({ modelKey, onSuccess }: GenericEditFormProps<T>) {
  const { id } = useParams<{ id: string }>()
  const registryEntry = modelRegistry[modelKey as string]!
  const { endpoint, enums } = registryEntry

  const { data, status, error } = useQuery<T>({
    queryKey: [endpoint, id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5263/${endpoint}${id}`)
      if (!res.ok) throw new Error('Failed to fetch item')
      return res.json()
    },
  })

  const [formData, setFormData] = useState<T | null>(null)

  useEffect(() => {
    if (data) setFormData(data)
  }, [data])

  const mutation = useMutation({
    mutationFn: async (data: T) => {
      const res = await fetch(`http://localhost:5263/${endpoint}${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to update item')
      return res.json()
    },
    onSuccess,
  })

  if (status === 'pending' || !formData) return <div>Loading...</div>
  if (status === 'error') return <div>Error: {(error as Error).message}</div>
  if (mutation.status === 'pending') return <div>Saving...</div>
  if (mutation.status === 'error') return <div>Error: {(mutation.error as Error).message}</div>

  return (
    <BasicForm<T>
      model={formData}
      onSubmit={(data) => mutation.mutate(data)}
      enums={enums}
    />
  )
}
