import { Segmented } from "antd";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useThemeStore } from "../../Entities";

export default function ThemeSwitch() {
  const isDark = useThemeStore((state) => state.isDark);
  const setTheme = useThemeStore((state) => state.setTheme);
  function toggleTheme() {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    setTheme();
  }

  return (
    <Segmented
      style={{ display: "flex", alignItems: "center" }}
      size={"large"}
      shape="round"
      options={[
        {
          value: "light",
          icon: <CiLight style={{ color: "#a94615" }} size={20} />,
        },
        {
          value: "dark",
          icon: (
            <MdNightlightRound
              style={{
                color: "yellow",
                transform: "rotate(-35deg)",
              }}
              size={20}
            />
          ),
        },
      ]}
      onChange={toggleTheme}
    />
  );
}
