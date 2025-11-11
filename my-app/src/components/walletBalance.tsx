import { useWalletBalance } from '../hooks/useWalletBalance'

interface WalletBalanceProps {
  walletId: string
}

export default function WalletBalance({ walletId }: WalletBalanceProps) {
  const { data: data, isLoading, isError } = useWalletBalance(walletId)

  if (isLoading) return <span>Wallet: loading...</span>
  if (isError) return <span>Wallet: error</span>

  return <span>User: {data?.ownerId} Wallet: ${data?.balance}</span>
}
