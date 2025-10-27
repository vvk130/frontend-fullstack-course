import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { fetchItemById } from '@/fetch'
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos'

export const Route = createFileRoute('/animal/$animalId')({
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

  const animalIdParam = `${animalType}-${data.id}`

  const tabs = [
    { label: 'Basic Info', path: '/animal/$animalId/info' },
    { label: 'Foals', path: '/animal/$animalId/foals' },
    { label: 'CompStats', path: '/animal/$animalId/compstats' },
    { label: 'Update', path: '/animal/$animalId/update' },
    { label: 'Breed', path: '/animal/$animalId/breed' },
  ]

  return (
    <>
      <nav className="item-bar">
        {tabs.map(({ label, path }) => (
          <Link key={label} to={path} params={{ animalId: animalIdParam }}>
            {label}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  )
}

export { fetchItemById }
