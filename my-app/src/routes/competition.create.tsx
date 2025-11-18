import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/competition/create"!</div>
}
