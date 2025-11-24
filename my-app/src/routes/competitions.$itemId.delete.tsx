import { deleteItem } from '@/utils/deleteItem'
import { useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/competitions/$itemId/delete')({
    loader: async ({ params }) => {
        const { itemId } = params
        return { itemId}
    },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { itemId } = Route.useParams();
  const item = 'competition';
  const queryClient = useQueryClient();
  const navigate = useNavigate();

    function handleDelete() {
    deleteItem(`${item}s`, itemId)
        .then(() => {

          queryClient.invalidateQueries({ queryKey: ['competitions'] });

          navigate({ to: '/competitions' });
        })
    }

  return (
    <div>
      <h2>Are you sure you want to delete this {item} {itemId}?</h2>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete
      </button>
    </div>
  )
}
