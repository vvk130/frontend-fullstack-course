import { fetchItemById } from '@/fetch'
import type { HorseShortDto } from '@/utils/dtos'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

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
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
            <Link to="/horse/$horseId" params={{horseId: horse.id}}>{horse.name}</Link> — {horse.gender} — {horse.breed}
          </div>
          {horse.gender !== "Gelding" && (
            <button className="btn" id="updateButton" type="button">
              Breed
            </button>
          )}
          <button className="btn" id="updateButton" type="button">
            Update
          </button>
          <button className="btn" id="deleteButton" type="button">
            Delete
          </button>
        </div>
      <Outlet />
    </>
  )
}
export { fetchItemById }

