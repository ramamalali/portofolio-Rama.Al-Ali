import { create } from "zustand";
import i18n from "#i18n/i18n";


export const useControlStore = create((set) => ({
  wifi: false,
  bluetooth: false,
  airDrop: false,
  theme: localStorage.getItem("theme") || "light", 
  display: 70,
  sound: 50,
  language: localStorage.getItem("language") || "en",
  isOpen: false,

  toggleWifi: () => set((state) => ({ wifi: !state.wifi })),

  toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),

  toggleAirDrop: () => set((state) => ({ airDrop: !state.airDrop })),

  toggleTheme: () => set((state) => { const newTheme = state.theme === "light" ? "dark" : "light"; localStorage.setItem("theme", newTheme); return { theme: newTheme }; }),
 

  setSound: (value) => set({ sound: value }),

  setDisplay: (value) => set({ display: value }),

  setLanguage: (lang) => { localStorage.setItem("language", lang); 
  i18n.changeLanguage(lang);
   set({ language: lang }); },
  

  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
