import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  <div>Solve the quiz! Only one correct answer</div>
  <Outlet/>
  </>)
}
