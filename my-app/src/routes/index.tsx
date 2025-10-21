import { createFileRoute } from '@tanstack/react-router'
import AuthForm from '@/forms/AuthForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
      <><AuthForm message="Sign Up" endpoint='register'/><AuthForm message="Log In" endpoint='login'/></>
  )
}
