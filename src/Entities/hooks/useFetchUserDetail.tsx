import { useEffect, useState } from "react";

export default function useFetchUserDetail() {
  const [user, setUser] = useState<Record<string, string>>({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("google_token");
    setIsFetching(true);
    if (token) {
      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setIsFetching(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setIsFetching(false);
        });
    }
  }, []);

  return { user, setUser, isFetching };
}
