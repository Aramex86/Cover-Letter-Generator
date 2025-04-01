import { Layout } from "antd";
import { PropsWithChildren } from "react";

const { Content: AppContent } = Layout;

interface ContentProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}
export default function Content({
  children,

  className,
}: PropsWithChildren<ContentProps>) {
  return <AppContent className={className}>{children}</AppContent>;
}
