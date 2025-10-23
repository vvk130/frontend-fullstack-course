import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/market/$ad')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/market/$ad"!</div>
}
