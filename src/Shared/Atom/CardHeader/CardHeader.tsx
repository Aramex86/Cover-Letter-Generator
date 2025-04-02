import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { useUserStore } from "../../../Entities";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./card-header.module.css";
export default function CardHeader() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleBack = () => {
    navigate("/");
    setUser({});
  };
  return (
    <Flex className={styles.cardHeaderContainer}>
      <Button type="primary" onClick={handleBack} icon={<IoIosArrowBack />}>
        Back
      </Button>
      <Typography className={styles.cardHeading}>
        Create Cover Letter with AI
      </Typography>
      <FaFileAlt className={styles.cardHeadingIcon} />
    </Flex>
  );
}
