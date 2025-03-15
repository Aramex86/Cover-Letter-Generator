import { Navigate, Outlet } from "react-router-dom";
import { useGoogleAuth } from "../Entities";
import { useEffect, useState } from "react";
import { Loader } from "../Shared/Atom";
const PrivateRoutes = () => {
  const { token } = useGoogleAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token !== null) {
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {<Loader />}
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
