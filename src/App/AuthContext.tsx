import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: Record<string, string>;
  token: string;
  setUser: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType>({
  user: {},
  token: "",
  setUser: () => {},
  setToken: () => {},
});
const AuthProvider = ({ children }: PropsWithChildren<object>) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Record<string, string>>({});
  const [token, setToken] = useState<string>("");

  console.log(user, token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
