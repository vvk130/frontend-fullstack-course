import CompNewForm from '@/forms/CompNewForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CompNewForm/>
}
