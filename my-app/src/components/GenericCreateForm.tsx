import { useMutation } from '@tanstack/react-query'
import BasicForm from './BasicForm'
import { modelRegistry } from '@/utils/modelRegistry'

type GenericCreateFormProps<T extends object> = {
  modelKey: keyof typeof modelRegistry
}

export default function GenericCreateForm<T extends object>({ modelKey }: GenericCreateFormProps<T>) {
  const entry = modelRegistry[modelKey] as typeof modelRegistry[keyof typeof modelRegistry]
  const { sample, endpoint, enums } = entry

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
  })

  const handleSubmit = (data: T) => mutation.mutate(data)

  return (
    <div>
      <h2>Create {entry.displayName}</h2>
      <BasicForm model={sample} onSubmit={handleSubmit} enums={enums} />
      {mutation.status === 'pending' && <div>Saving...</div>}
      {mutation.status === 'error' && <div>Error: {(mutation.error as Error).message}</div>}
      {mutation.status === 'success' && <div>Created successfully!</div>}
    </div>
  )
}
