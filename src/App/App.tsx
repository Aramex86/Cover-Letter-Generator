import { ConfigProvider, theme } from "antd";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../Pages";
import useThemeStore from "../Entities/ThemeStore/themeStore";
import AiChatPage from "../Pages/AIChat";
function App() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const isDark = useThemeStore((state) => state.isDark);
  console.log(import.meta.env.VITE_GROCK_API_KEY, "VITE_GROCK_API_KEY");

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: isDark ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chat" element={<AiChatPage />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
