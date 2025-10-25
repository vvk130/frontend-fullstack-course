import { useQuery } from '@tanstack/react-query'
import { fetchItemById } from '../fetch'

interface WalletResponse {
  id: string,
  ownerdId: string,
  balance: number
}

export function useWalletBalance(walletId: string) {
  return useQuery({
    queryKey: ['wallet-balance', walletId],
    queryFn: () => fetchItemById<WalletResponse>('api/wallet/', walletId),
    select: (data) => data.balance
  })
}
