import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/instructions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/instructions"!</div>
}
