import { Flex, Tooltip } from "antd";
import { BsFillQuestionCircleFill } from "react-icons/bs";

interface HelperProps {
  helperText?: string;
}

export default function Helper({ helperText }: HelperProps) {
  return (
    <Flex>
      <Tooltip title={helperText}>
        <BsFillQuestionCircleFill size={16} />
      </Tooltip>
    </Flex>
  );
}
