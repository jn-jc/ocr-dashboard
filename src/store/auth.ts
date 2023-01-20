import { create } from 'zustand'
import { persist } from "zustand/middleware";

type State = {
  token: string
  profile: any
  isAuth: boolean
}

type Actions = {
  setToken: (token: string) => void
  setProfile: (profile: any) => void
  logOut: () => void
}

export const useAuthStore = create(persist<State & Actions>((set) => ({
  token: '',
  profile: null,
  isAuth: false,
  setProfile: (profile: any) => set((state) => ({
    profile,
    isAuth: true
  })),
  setToken: (token: string) => set((state) => ({
    token
  })),
  logOut: () => set((state) => ({
    token: '',
    profile: null,
    isAuth: false,
  }))
}), {
  name: 'auth'
}
))