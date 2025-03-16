import { ConfigProvider, Flex, Layout, Skeleton, Typography } from "antd";
import { Avatar } from "../Avatar";
import { useNavigate } from "react-router-dom";
import { useFetchUserDetail } from "../../../Entities/hooks";

const { Header: AppHeader } = Layout;

export default function Header() {
  const navigate = useNavigate();
  const { user, isFetching } = useFetchUserDetail();

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
      <AppHeader>
        <Flex justify="space-between" align="center" style={{ height: 64 }}>
          <Typography style={{ fontWeight: 700 }}>
            Cover Letter Generator
          </Typography>
          {isFetching ? (
            <Skeleton.Avatar active size={42} shape="circle" />
          ) : (
            <Avatar
              onClick={() => navigate("/profile")}
              src={user?.picture}
              title={user.name}
              // icon={<FaRegCircleUser />}
            />
          )}
        </Flex>
      </AppHeader>
    </ConfigProvider>
  );
}
