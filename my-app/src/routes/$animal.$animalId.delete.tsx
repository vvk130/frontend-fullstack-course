import { createFileRoute } from '@tanstack/react-router'
import { deleteItem } from '@/utils/deleteItem'

export const Route = createFileRoute('/$animal/$animalId/delete')({
  loader: async ({ params }) => {
    const { animal, animalId } = params
    return { animal, animalId}
  },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { animal, animalId } = Route.useParams()

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Delete {animal} #{animalId}</h2>
      <p>Are you sure you want to delete this item?</p>

      <form method="post">
        <button
        onClick={async () => {
            const endpoint = `${animal}s`
            var success = await deleteItem(endpoint, animalId)

            if (success) {
            window.location.href = '/index' 
            }
        }}
        style={{ background: 'red', color: 'white', padding: '0.5rem 1rem' }}
        >
        Delete
        </button>
      </form>
    </div>
  )
}

