import FoalForm from '@/forms/FoalForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/breed')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <FoalForm/>
    </div>
  }