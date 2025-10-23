import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$competitionId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/competition/$competitionId"!</div>
}
