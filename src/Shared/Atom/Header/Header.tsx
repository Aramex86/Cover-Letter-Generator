import { ConfigProvider, Flex, Layout, Skeleton, Typography } from "antd";
import { Avatar } from "../Avatar";
import { useNavigate } from "react-router-dom";
import { useFetchUserDetail } from "../../../Entities/hooks";
import { SlEnvolopeLetter } from "react-icons/sl";
import styles from "./header.module.css";

const { Header: AppHeader } = Layout;

export default function Header() {
  const navigate = useNavigate();
  const { googleUser, isFetching } = useFetchUserDetail();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#ffffff",
          },
          Typography: {
            colorText: "#ffffff",
            fontSize: 25,
          },
        },
      }}
    >
      <AppHeader className={styles.header}>
        <Flex justify="space-between" align="center" style={{ height: 64 }}>
          <Typography style={{ fontWeight: 700, fontSize: 24 }}>
            <SlEnvolopeLetter /> Cover Letter Generator
          </Typography>
          {isFetching ? (
            <Skeleton.Avatar active size={42} shape="circle" />
          ) : (
            <Avatar
              onClick={() => navigate("/profile")}
              src={googleUser?.picture}
              title={googleUser.name}
              // icon={<FaRegCircleUser />}
            />
          )}
        </Flex>
      </AppHeader>
    </ConfigProvider>
  );
}
