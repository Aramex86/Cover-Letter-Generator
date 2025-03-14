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
  className?: string;
}
export default function Content({
  children,
  styles,
  className,
}: PropsWithChildren<ContentProps>) {
  return (
    <AppContent style={{ ...contentStyle, ...styles }} className={className}>
      {children}
    </AppContent>
  );
}
