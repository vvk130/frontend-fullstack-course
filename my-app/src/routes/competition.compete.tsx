import CompeteForm from '@/forms/CompeteForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/compete')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<><CompeteForm /></>)
}
