import WalletForm from '@/forms/WalletForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wallet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  <h1>Wallet</h1>
  <WalletForm/></>)
}
