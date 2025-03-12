import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStoreState {
  user: Record<string, string>;
  setUser: (user: Record<string, string>) => void;
  additionalInfo: (data: Record<string, string>) => void;
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: {},
      setUser: (user: Record<string, string>) => set({ user }),
      additionalInfo: (data) => set({ user: { ...get().user, ...data } }),
    }),
    { name: "user-state" }
  )
);
export default useUserStore;
