import { createFileRoute } from '@tanstack/react-router'
import SignInForm from '@/forms/SignInForm'
import LogInForm from '@/forms/LogInForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
      <><SignInForm/><LogInForm/></>
  )
}
