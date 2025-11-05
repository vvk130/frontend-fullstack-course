import { useQuery } from '@tanstack/react-query'
import { fetchItemById } from '../fetch'
import type { AlpacaDto } from '@/utils/dtos'

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

export function useAnimal(animalId: string) {
  return useQuery({
    queryKey: ['animal', animalId],
    queryFn: () => fetchItemById<AlpacaDto>('api/alpaca/', animalId),
    select: (data) => data
  })
}