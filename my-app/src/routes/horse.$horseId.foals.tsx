import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/horse/$horseId/foals')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  <h1>Foals</h1>
  {/* <FoalLoader/> */}
  </>)
}
