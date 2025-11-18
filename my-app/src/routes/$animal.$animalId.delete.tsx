import { createFileRoute } from '@tanstack/react-router'
import { deleteItem } from '@/utils/deleteItem'
import { frontEndUrl } from '@/apiUrl'

export const Route = createFileRoute('/$animal/$animalId/delete')({
  loader: async ({ params }) => {
    const { animal, animalId } = params
    return { animal, animalId}
  },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { animal, animalId } = Route.useParams()

    function handleDelete() {
    deleteItem(`${animal}s`, animalId)
        .then(() => {
        window.location.href = `${frontEndUrl}`
        })
        .catch(() => {
        alert('Failed to delete item')
        })
    }

  return (
    <div>
      <h2>Are you sure you want to delete this {animal}?</h2>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete
      </button>
    </div>
  )
}

