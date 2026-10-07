import { apiFetch } from './apiFetch'

export async function deleteItem(endpoint: string, id: string) {
  const response = await apiFetch(`${endpoint}/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    alert(`Failed to delete item: ${response.statusText}`)
    return false
  }

  alert("Item deleted successfully!")
  return true
}
