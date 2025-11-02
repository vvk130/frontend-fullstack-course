import { createFileRoute } from '@tanstack/react-router'
import { DetailTable } from '@/components/DetailTable'
import { fetchItemById } from '@/fetch'
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos'
import AlpacaForm from '@/forms/AlpacaForm'
import HorseForm from '@/forms/HorseForm'

export const Route = createFileRoute('/animal/$animalId/info')({
  loader: async ({ params }) => {
    const { animalId } = params

    const [animalType, id] = animalId.split('_') as [AnimalType, string]

    const endpoint = `api/${animalType}s/`
    const data = await fetchItemById(endpoint, id)

    console.log(endpoint);
    console.log(id);

    return { animalType, data }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { animalType, data } = Route.useLoaderData() as {
    animalType: AnimalType
    data: AnimalDtoMap[AnimalType]
  }

  return (
    <div style={{ padding: '1rem' }}>
      <AlpacaForm alpacaId={data.id}/>
      <HorseForm horseId={data.id}/>
      <DetailTable data={data} />
    </div>
  )
}
