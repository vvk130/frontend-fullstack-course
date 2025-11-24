import { deleteItem } from '@/utils/deleteItem'
import { useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/ad/$adId/delete')({
    loader: async ({ params }) => {
        const { adId } = params
        return { adId}
    },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { adId } = Route.useParams();
  const item = 'salesad';
  const queryClient = useQueryClient();
  const navigate = useNavigate();

    function handleDelete() {
    deleteItem(`${item}s`, adId)
        .then(() => {

          queryClient.invalidateQueries({ queryKey: ['salesAds'] });

          navigate({ to: '/buyhorses' });
        })
    }

  return (
    <div>
      <h2>Are you sure you want to delete this {item} {adId}?</h2>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete
      </button>
    </div>
  )
}
