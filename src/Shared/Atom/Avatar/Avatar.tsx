import { Avatar as AppAvatar, Tooltip } from "antd";
import { ReactNode } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
interface AvatarProps {
  onClick?: () => void;
  src?: string | ReactNode;
  title?: string;
  size?: number;
  icon?: ReactNode;
}

export default function Avatar({
  onClick,
  src,
  title,
  size = 42,
  icon = <FaRegCircleUser />,
}: AvatarProps) {
  return (
    <Tooltip title={title} destroyTooltipOnHide>
      <AppAvatar
        size={size}
        icon={!src && icon}
        onClick={onClick}
        src={src}
        style={{ cursor: "pointer" }}
        alt="avatar"
        shape="circle"
      />
    </Tooltip>
  );
}
