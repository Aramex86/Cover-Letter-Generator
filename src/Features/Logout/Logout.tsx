import { Button } from "antd";
import { useGoogleAuth } from "../../Entities";

interface LogoutProps {
  width?: string | number;
}
export default function Logout({ width = "100%" }: LogoutProps) {
  const { handleLogout } = useGoogleAuth();
  return (
    <Button
      onClick={handleLogout}
      style={{ fontSize: 16, fontWeight: 700, padding: 20, width }}
      type="primary"
      danger
    >
      Log Out
    </Button>
  );
}
