import type { HorseShortDto } from '@/utils/dtos'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export async function fetchItemById<T>(url: string, id: string): Promise<T> {
  const API_URL = 'http://localhost:5263/'
  const res = await fetch(`${API_URL}${url}${id}`)
  if (!res.ok) throw new Error(`Failed to fetch item: ${res.status}`)
  return res.json()
}

export const Route = createFileRoute('/horse/$horseId')({
  loader: async ({ params: { horseId } }) => {
    return fetchItemById<HorseShortDto>('api/Horses/', horseId)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const horse = Route.useLoaderData()

  return (
    <>
      <div>{horse.id}</div>
      <div>{horse.name}</div>
      <div>{horse.breed}</div>
      <div>{horse.gender}</div>
      <Outlet />
    </>
  )
}
