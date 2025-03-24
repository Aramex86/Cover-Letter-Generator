import { useEffect } from "react";
import { getUserById } from "../service/db";
import useFetchUserDetail from "./useFetchUserDetail";
import { useUserStore } from "../UserDataStore";

export default function useGetUserById() {
  const { googleUser } = useFetchUserDetail();
  const { setUser } = useUserStore();

  // console.log(user, "user");

  useEffect(() => {
    const fetchUserById = async (id: string) => {
      const userById = await getUserById(id);

      console.log(userById, "userById");
      // setUser({ ...googleUser, ...userById } as UserType);
    };

    fetchUserById(googleUser.id);
  }, [googleUser.id, setUser, googleUser]);
}
