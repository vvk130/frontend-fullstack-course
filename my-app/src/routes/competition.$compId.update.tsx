import CompUpdateForm from '@/forms/CompUpdateForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$compId/update')({
  loader: async ({ params }) => {
    const { compId } = params
    return { compId }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { compId } = Route.useParams()

  return <div>
  <CompUpdateForm compId={compId}/>
  </div>
}
