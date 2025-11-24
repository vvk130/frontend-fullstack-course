import { useQuery, useMutation, useQueryClient, type QueryKey } from '@tanstack/react-query'
import { apiUrl } from '@/apiUrl';

export async function fetchItem<T>(entity: string, id: string): Promise<T> {
  const res = await fetch(`${apiUrl}${entity}/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch ${entity}: ${res.status}`)
  return res.json()
}

export async function updateItem<T>(entity: string, id: string, data: T): Promise<T> {
  const res = await fetch(`${apiUrl}${entity}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`Failed to update ${entity}: ${res.status}`)
  return res.json()
}

export function useItem<TData>(entity: string, id: string) {
  const queryClient = useQueryClient()

  const key: QueryKey = [entity, id]

  const query = useQuery<TData>({
    queryKey: key,
    queryFn: () => fetchItem<TData>(entity, id),
  })

  const mutation = useMutation({
    mutationFn: (data: TData) => updateItem<TData>(entity, id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: key }),
  })

  return { ...query, mutation }
}



// export function useItem<TData>(entity: string, id?: string) {
//   const queryClient = useQueryClient();
//   const key: QueryKey = [entity, id];

//   const query = useQuery<TData>({
//     queryKey: key,
//     queryFn: () => fetchItem<TData>(entity, id!),
//     enabled: !!id,
//   });

//   const mutation = useMutation({
//     mutationFn: (data: TData) => updateItem<TData>(entity, id!, data),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: key }),
//   });

//   return { ...query, mutation };
// }
