import { useQuery, useMutation } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import BasicForm from './BasicForm'
import { modelRegistry } from '@/utils/modelRegistry'

type GenericEditFormProps<T extends object> = {
  modelKey: keyof typeof modelRegistry
  idParam: string
}

export default function GenericEditForm<T extends object>({ modelKey, idParam }: GenericEditFormProps<T>) {
  const params = useParams<{ [key: string]: string }>()
  const id = params[idParam]
  const entry = modelRegistry[modelKey] as typeof modelRegistry[keyof typeof modelRegistry]
  const { endpoint, enums, sample, displayName } = entry

  const { data, isLoading, error } = useQuery({
    queryKey: [modelKey, id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5263/${endpoint}${id}`)
      if (!res.ok) throw new Error('Failed to fetch item')
      return res.json()
    },
  })

  const mutation = useMutation({
    mutationFn: async (formData: T) => {
      const res = await fetch(`http://localhost:5263/${endpoint}${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to update item')
      return res.json()
    },
  })

  const handleSubmit = (formData: T) => mutation.mutate(formData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading item</div>
  if (!data) return <div>Item not found</div>

  return (
    <div>
      <h2>Edit {displayName}</h2>
      <BasicForm model={data} onSubmit={handleSubmit} enums={enums} />
      {mutation.status === 'pending' && <div>Saving...</div>}
      {mutation.status === 'error' && <div>Error: {(mutation.error as Error).message}</div>}
      {mutation.status === 'success' && <div>Updated successfully!</div>}
    </div>
  )
}
