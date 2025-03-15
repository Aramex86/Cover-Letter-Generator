import { ConfigProvider, theme } from "antd";
import "./global.css";
import { Route, Routes } from "react-router";
import { Home, Login, AIChatPage } from "../Pages";
import useThemeStore from "../Entities/ThemeStore/themeStore";
import PrivateRoute from "./PrivateRoute";

function App() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? defaultAlgorithm : darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="chat" element={<AIChatPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
