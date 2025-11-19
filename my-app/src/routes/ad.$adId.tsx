import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ad/$adId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/market/$ad"!</div>
}
