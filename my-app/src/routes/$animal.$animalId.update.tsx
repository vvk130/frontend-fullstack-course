import { fetchItemById } from '@/fetch'
import AlpacaForm from '@/forms/AlpacaForm'
import HorseForm from '@/forms/HorseForm'
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/$animal/$animalId/update')({
  loader: async ({ params }) => {
    const { animal, animalId } = params

    const endpoint = `api/${animal}s/`
    const data = await fetchItemById(endpoint, animalId)

    console.log(endpoint);
    console.log(animalId);

    return { animal, data }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = useLoaderData({ from: '/$animal/$animalId' })
  const { animal: animalType, data } = loaderData as {
    animal: AnimalType
    data: AnimalDtoMap[AnimalType]
  }

  return (
    <div style={{ padding: '1rem' }}>
      {animalType === 'alpaca' && <AlpacaForm alpacaId={data.id} />}
      {animalType === 'horse' && <HorseForm horseId={data.id} />}
    </div>
  )
}
