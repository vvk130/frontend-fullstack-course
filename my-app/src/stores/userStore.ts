import { Store } from '@tanstack/react-store'

export type UserState = {
  userId: string | null
  walletId: string | null
  walletBalance: number
}

export const userStore = new Store({
  userId: null,
  walletId: null,
  walletBalance: 0,
})

export const updateId = (idType: 'userId' | 'walletId', value: string | null) => {
  userStore.setState((state) => ({
    ...state,
    [idType]: value,
  }))
}

