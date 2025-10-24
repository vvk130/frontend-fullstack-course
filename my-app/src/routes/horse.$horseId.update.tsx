import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId/update')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/horse/$horseId/update"!</div>
}
