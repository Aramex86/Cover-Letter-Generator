import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  setTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  setTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
export default useThemeStore;
