import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId/compstats')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<><h1>CompStats</h1></>)
}
