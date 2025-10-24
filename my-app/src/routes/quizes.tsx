import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quizes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quizes"!</div>
}
