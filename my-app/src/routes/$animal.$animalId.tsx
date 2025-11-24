import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { fetchItemById } from '@/fetch'
import type { AnimalDtoMap, AnimalType } from '@/utils/dtos'

export const Route = createFileRoute('/$animal/$animalId')({
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
  const { animal: animalType, data } = Route.useLoaderData() as {
    animal: AnimalType
    data: AnimalDtoMap[AnimalType]
  }

  const animalIdParam = `${data.id}`

  const tabs = [
    { label: 'Basic Info', path: `/${animalType}/${animalIdParam}/info` },
    { label: 'Update', path: `/${animalType}/${animalIdParam}/update` },
    { label: 'Foals', path: `/${animalType}/${animalIdParam}/foals` },
    { label: 'Results', path: `/${animalType}/${animalIdParam}/results` },
    { label: 'Delete', path: `/${animalType}/${animalIdParam}/delete` },
  ]

  return (
    <>
      <nav className="item-bar">
        {tabs.map(({ label, path }) => (
          <Link key={label} to={path}>
            {label}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  )

}

export { fetchItemById }
