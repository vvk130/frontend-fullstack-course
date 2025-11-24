import CompeteForm from '@/forms/CompeteForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$compId/compete')({
  loader: async ({ params }) => {
    const { compId } = params
    return { compId }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { compId } = Route.useParams()
  return (<><CompeteForm compId={compId}/></>)
}
