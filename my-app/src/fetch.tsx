export async function fetchItemById<T>(url: string, id: string): Promise<T> {
  const API_URL = 'http://localhost:5263/'
  const res = await fetch(`${API_URL}${url}${id}`)
  if (!res.ok) throw new Error(`Failed to fetch item: ${res.status}`)
  return res.json()
}
