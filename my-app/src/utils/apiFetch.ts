import { apiUrl } from '@/apiUrl'

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const accessToken = localStorage.getItem('horseappinfo.accessToken')

  const headers = new Headers(options.headers)

  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`)
  }

  return fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers,
  })
}
