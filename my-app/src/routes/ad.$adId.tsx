import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/ad/$adId')({
    loader: async ({ params }) => {
        const { adId } = params
        return { adId}
    },

  component: DeleteComponent,
})

function DeleteComponent() {
  const { adId } = Route.useParams();
  const item = 'Salesad';

  return (
    <div>
      <h2>{item} {adId}</h2>
      <Outlet/>
    </div>
  )
}
