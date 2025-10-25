import { DetailTable } from '@/components/DetailTable'
import { fetchItemById } from '@/fetch'
import type { HorseDto } from '@/utils/dtos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId/info')({
  loader: async ({ params: { horseId } }) => {
    return fetchItemById<HorseDto>('api/Horses/', horseId)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const horse = Route.useLoaderData()

  return (
  <>
  <DetailTable data={horse} />
  </>)
}
