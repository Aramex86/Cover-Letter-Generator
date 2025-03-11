import { Button, ConfigProvider, Flex, Layout, Typography } from "antd";
import LightMode from "../../assets/day-mode.png";
import DarkMode from "../../assets/moon.png";
import { useThemeStore } from "../../../Entities";

const { Header: AppHeader } = Layout;

export default function Header() {
  const isDark = useThemeStore((state) => state.isDark);
  const setTheme = useThemeStore((state) => state.setTheme);

  function toggleTheme() {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    setTheme();
  }

  const themeIcon = isDark ? (
    <img src={LightMode} alt="LightMode" className="theme-icon" />
  ) : (
    <img src={DarkMode} alt="LightMode" className="theme-icon" />
  );
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#ffffff",
          },
          Typography: {
            colorText: "#ffffff",
            fontSize: 25,
          },
        },
      }}
    >
      <AppHeader>
        <Flex justify="space-between" align="center" style={{ height: 64 }}>
          <Typography style={{ fontWeight: 700 }}>
            Cover Letter Generator
          </Typography>
          <Button onClick={toggleTheme} className="theme-switch-btn">
            {themeIcon}
          </Button>
        </Flex>
      </AppHeader>
    </ConfigProvider>
  );
}
