import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/$quizId/update')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/$quizId/update"!</div>
}
