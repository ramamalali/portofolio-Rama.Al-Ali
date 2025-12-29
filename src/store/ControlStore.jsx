
import { create } from 'zustand';

export const useControlStore = create((set) => ({
  wifi: true,
  bluetooth: false,
  volume: 50,
  brightness: 70,
  language: 'En',
  theme: 'light',
  isOpen: false,

  toggleWifi: () => set((state) => ({ wifi: !state.wifi })),

  toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),

  setVolume: (value) => set({ volume: value }),

  setBrightness: (value) => set({ brightness: value }),

  toggleLanguage: () =>
    set((state) => ({ language: state.language === 'En' ? 'Ar' : 'En' })),

  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

}));
