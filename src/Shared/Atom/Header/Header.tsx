import { Button, ConfigProvider, Flex, Layout, Typography } from "antd";
import { MdNightlightRound } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useThemeStore } from "../../../Entities";
import { googleLogout } from "@react-oauth/google";
import { useAuth } from "../../../App/useAuth";

const { Header: AppHeader } = Layout;

export default function Header() {
  const isDark = useThemeStore((state) => state.isDark);
  const setTheme = useThemeStore((state) => state.setTheme);
  const { setUser, setToken } = useAuth();

  function toggleTheme() {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    setTheme();
  }

  const themeIcon = isDark ? (
    <CiLight style={{ color: "#a94615" }} size={20} />
  ) : (
    <MdNightlightRound
      style={{ color: "yellow", transform: "rotate(-35deg)" }}
      size={20}
    />
  );

  const handleLogout = () => {
    setUser({});
    setToken("");
    googleLogout();
  };
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
          <Button onClick={handleLogout}>Log Out</Button>
        </Flex>
      </AppHeader>
    </ConfigProvider>
  );
}
