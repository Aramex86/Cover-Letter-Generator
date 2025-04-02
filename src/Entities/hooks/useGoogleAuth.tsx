import { useEffect } from "react";
import useAuthStore from "../AuthStore/authStore";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function useGoogleAuth() {
  const { token, setToken, logout } = useAuthStore();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setToken(response.access_token);
      console.log(response, "token");
      sessionStorage.setItem("google_token", response.access_token);
      navigate("/");
    },
    onError: () => {
      console.error("Login Failed");
      navigate("/login");
    },
  });

  useEffect(() => {
    const storedToken = sessionStorage.getItem("google_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  const handleLogout = () => {
    googleLogout();
    sessionStorage.removeItem("google_token");
    logout();
  };

  return { token, login, handleLogout };
}
