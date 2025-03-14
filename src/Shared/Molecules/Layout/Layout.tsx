import { Layout as AppLayout, Flex } from "antd";
import { Header } from "../../Atom";
import { PropsWithChildren } from "react";
import useThemeStore from "../../../Entities/ThemeStore/themeStore";

interface LayoutProps {
  children?: React.ReactNode;
}

const layoutStyle: React.CSSProperties = {
  padding: "25px 2%",
  minWidth: "100%",
  width: "100%",
  minHeight: "calc(100vh - 64px)",
};
export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <>
      <Header />
      <AppLayout
        style={{
          ...layoutStyle,
          backgroundColor: isDark ? "#ffffff" : "#020202",
        }}
      >
        <Flex gap={15}>{children}</Flex>
      </AppLayout>
    </>
  );
}
