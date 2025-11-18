import { apiUrl } from "@/apiUrl"

export async function deleteItem(endpoint: string, id: string) {
  const response = await fetch(`${apiUrl}${endpoint}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    alert(`Failed to delete item: ${apiUrl} ${endpoint} ${id} ${response.statusText}`)
    return false
  }

  alert("Item deleted successfully!")
  return true
}
