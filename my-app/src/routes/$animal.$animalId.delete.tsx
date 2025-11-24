import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { deleteItem } from '@/utils/deleteItem'

export const Route = createFileRoute('/$animal/$animalId/delete')({
  loader: async ({ params }) => {
    const { animal, animalId } = params
    return { animal, animalId}
  },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { animal, animalId } = Route.useParams();
  const navigate = useNavigate();

    function handleDelete() {
    deleteItem(`${animal}s`, animalId)
        .then(() => {
          navigate({ to: '/' });
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

