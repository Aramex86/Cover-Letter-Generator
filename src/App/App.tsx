import { ConfigProvider, theme } from "antd";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Login, AIChatPage } from "../Pages";
import useThemeStore from "../Entities/ThemeStore/themeStore";
import { AuthProvider } from "./AuthContext";

function App() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider
          theme={{
            algorithm: isDark ? defaultAlgorithm : darkAlgorithm,
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="chat" element={<AIChatPage />} />
          </Routes>
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
