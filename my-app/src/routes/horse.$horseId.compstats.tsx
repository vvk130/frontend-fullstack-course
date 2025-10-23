import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId/compstats')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/horse/$horseId/compstats"!</div>
}
