import { ConfigProvider, theme } from "antd";
import "./global.css";
import { Route, Routes } from "react-router";
import { Home, Login, AIChatPage } from "../Pages";
import useThemeStore from "../Entities/ThemeStore/themeStore";
import PrivateRoute from "./PrivateRoute";
import { useGoogleAuth } from "../Entities";

function App() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const isDark = useThemeStore((state) => state.isDark);
  const { token } = useGoogleAuth();

  console.log(token, "token");
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? defaultAlgorithm : darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={token ? <PrivateRoute /> : <Login />}>
          <Route path="/" element={<Home />} />
          <Route path="chat" element={<AIChatPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
