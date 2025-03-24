import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  setTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      setTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: "theme-state" }
  )
);

export default useThemeStore;
