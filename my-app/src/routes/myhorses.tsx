import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/myhorses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Your horses</div>
  <Link
    to="/horse-create"
  >
    Create Horse
  </Link> || 
    <Link
    to="/myhorses/$filter"
    params={{ filter: "mare"}}
  >
    Your mares
  </Link> || 
    <Link
    to="/myhorses/$filter"
    params={{ filter: "stallion"}}
  >
    Your stallions
  </Link> || 
    <Link
    to="/myhorses/$filter"
    params={{ filter: "gelding"}}
  >
    Your geldings
  </Link>
  <Outlet/>
  </>);
}

