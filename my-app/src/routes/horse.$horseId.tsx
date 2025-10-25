import { fetchItemById } from '@/fetch'
import type { HorseShortDto } from '@/utils/dtos'
import { createFileRoute, Outlet } from '@tanstack/react-router'

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
export { fetchItemById }

