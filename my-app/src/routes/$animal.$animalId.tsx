import { fetchItemById } from '@/fetch'
import type { HorseShortDto } from '@/utils/dtos'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$animal/$animalId')({
  loader: async ({ params }) => {
    const { animal, animalId } = params

    const endpoint = `api/${animal.charAt(0).toUpperCase() + animal.slice(1)}s/`

    const data = await fetchItemById(endpoint, animalId)

    return { animal, data }
  },
  component: RouteComponent,
})

function RouteComponent() {
  // const animal = Route.useLoaderData()

  return (
    <>
        <div>
          Animal Page 
        </div>
      <Outlet />
    </>
  )
}
export { fetchItemById }

