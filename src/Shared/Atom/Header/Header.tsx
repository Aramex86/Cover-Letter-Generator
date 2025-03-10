import { Button, ConfigProvider, Flex, Layout, Typography } from "antd";
import useThemeStore from "../../../Entities/ThemeStore/themeStore";

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
          <Button onClick={toggleTheme}>
            Theme {isDark ? "Light" : "Dark"}
          </Button>
        </Flex>
      </AppHeader>
    </ConfigProvider>
  );
}
