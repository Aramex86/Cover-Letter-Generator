import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { useUserStore } from "../../../Entities";
import { IoIosArrowBack } from "react-icons/io";
export default function CardHeader() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleBack = () => {
    navigate("/home");
    setUser({});
  };
  return (
    <Flex justify="space-between">
      <Button type="primary" onClick={handleBack} icon={<IoIosArrowBack />}>
        Back
      </Button>
      <Typography style={{ fontSize: 25 }}>Create Cover Letter</Typography>
      <FaFileAlt style={{ fontSize: 25 }} />
    </Flex>
  );
}
