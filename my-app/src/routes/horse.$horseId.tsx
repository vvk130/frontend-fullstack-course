import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  <div>Moonlight</div>
  <Outlet />
  </>)
}
