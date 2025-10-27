import { DetailTable } from '@/components/DetailTable'
import { fetchItemById } from '@/fetch'
import { createFileRoute } from '@tanstack/react-router'
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos'

export const Route = createFileRoute('/$animal/$animalId/info')({
  loader: async ({ params }) => {
    const { animal, animalId } = params

    const endpoint = `api/${animal.charAt(0).toUpperCase() + animal.slice(1)}s/`

    const data = await fetchItemById(endpoint, animalId)

    return { animal, data }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { animal, data } = Route.useLoaderData() as {
    animal: AnimalType
    data: AnimalDtoMap[AnimalType]
  }

  return (
    <>
      <h2 className="text-xl font-semibold capitalize mb-2">{animal} Info</h2>
      <DetailTable data={data} />
    </>
  )
}

