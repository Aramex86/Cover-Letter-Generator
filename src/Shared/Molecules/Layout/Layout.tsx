import { Layout as AppLayout } from "antd";
import { Header } from "../../Atom";
import { PropsWithChildren } from "react";
import useThemeStore from "../../../Entities/ThemeStore/themeStore";

interface LayoutProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

const layoutStyle: React.CSSProperties = {
  padding: "25px 2%",
  minWidth: "100%",
  width: "100%",
  minHeight: "calc(100vh - 64px)",
};
export default function Layout({
  children,
  className,
}: PropsWithChildren<LayoutProps>) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <>
      <Header />
      <AppLayout
        className={className}
        style={{
          ...layoutStyle,

          backgroundColor: isDark ? "#ffffff" : "#020202",
        }}
      >
        {children}
      </AppLayout>
    </>
  );
}
