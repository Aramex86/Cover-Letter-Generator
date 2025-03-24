import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUser } from "../service/db";
import { UserType } from "../types";

interface UserStoreState {
  user: UserType;
  setUser: (user: UserType) => void;
  additionalInfo: (data: Record<string, string>) => void;
  fetchUserData: (id: string) => void;
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: {},
      setUser: (user: UserType) => set({ user }),
      setGoogleUser: (user: UserType) => set({ user }),
      additionalInfo: (data) => set({ user: { ...get().user, ...data } }),
      fetchUserData: async (id: string) => {
        const data = await getUser();
        const findUser = data.find((item) => item.id === id);
        console.log(findUser, "data");
        set({ user: findUser });
      },
    }),
    { name: "user-state" }
  )
);
export default useUserStore;
