import { apiUrlWithoutApiWord } from "./apiUrl"

export async function fetchItemById<T>(url: string, id: string): Promise<T> {
  const API_URL = `${apiUrlWithoutApiWord}`
  const res = await fetch(`${API_URL}${url}${id}`)
  const data = await res.json()

  if (!res.ok && data.success === false) {
    return data   
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch item: ${res.status}`)
  }

  return data
}
