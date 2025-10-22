import CheckResultsForm from '@/forms/CheckResults'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leaderboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<><div>Hello "/leaderboard"!</div><CheckResultsForm/></>)
}
