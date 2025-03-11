import { Layout } from "antd";
import { PropsWithChildren } from "react";

const { Content: AppContent } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  color: "#020202",
  width: "50%",
};

interface ContentProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}
export default function Content({
  children,
  styles,
}: PropsWithChildren<ContentProps>) {
  return (
    <AppContent style={{ ...contentStyle, ...styles }}>{children}</AppContent>
  );
}
