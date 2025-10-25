import { fetchItemById } from '@/fetch'
import WalletForm from '@/forms/WalletForm'
import type { WalletDto } from '@/utils/dtos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wallet/$walletId')({
  loader: async ({ params: { walletId } }) => {
    return fetchItemById<WalletDto>('api/wallet/', walletId)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const wallet = Route.useLoaderData()
  return (<>
  <h1>Wallet</h1>
  Your wallet balance is: 
  {wallet.balance}
  <WalletForm/></>)
}
