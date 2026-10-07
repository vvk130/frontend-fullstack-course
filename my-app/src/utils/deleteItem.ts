import { apiUrl } from "@/apiUrl"

export async function deleteItem(endpoint: string, id: string) {
  const accessToken = localStorage.getItem("horseappinfo.accessToken")

  const response = await fetch(`${apiUrl}${endpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    alert(`Failed to delete item: ${response.statusText}`)
    return false
  }

  alert("Item deleted successfully!")
  return true
}
