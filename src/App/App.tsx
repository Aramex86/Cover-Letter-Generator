import { ConfigProvider, theme } from "antd";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../Pages";
import useThemeStore from "../Entities/ThemeStore/themeStore";

function App() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: isDark ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
