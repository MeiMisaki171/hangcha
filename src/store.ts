import { create } from 'zustand'

type Language = 'en' | 'vi'

interface StoreState {
  token: string | null
  setToken: (token: string | null) => void
  language: Language
  setLanguage: (lang: Language) => void
}

export const useAppStore = create<StoreState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  language: 'en',
  setLanguage: (lang) => set({ language: lang })
}))
