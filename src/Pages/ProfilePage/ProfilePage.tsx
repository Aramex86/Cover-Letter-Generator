import { Logout, ThemeSwitch } from "../../Features";
import { Button, Col, Row, Typography } from "antd";
import { Avatar, Content, Input } from "../../Shared/Atom";
import { useFetchUserDetail } from "../../Entities/hooks";
import { FaRegCircleUser } from "react-icons/fa6";
import { Layout } from "../../Shared/Molecules";

export default function ProfilePage() {
  const { user } = useFetchUserDetail();

  return (
    <Layout>
      <Content
        styles={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Row justify="start">
          <Col span={2}>
            <Avatar
              src={
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }
              icon={<FaRegCircleUser />}
              title=""
              size={100}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: 20,
            }}
          >
            <Typography style={{ fontSize: 25, fontWeight: 700 }}>
              {user?.name}
            </Typography>
            <Typography style={{ fontSize: 18 }}>{user?.email}</Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }} justify="start">
          <Col
            span={15}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <Typography.Title
              level={3}
              style={{ fontSize: 25, fontWeight: 700 }}
            >
              Bio
            </Typography.Title>
            <Typography style={{ fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque leo nec magna fermentum, a facilisis nulla cursus.
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col
            span={24}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <Typography.Title
              level={3}
              style={{ fontSize: 25, fontWeight: 700 }}
            >
              Settings
            </Typography.Title>
            <Content
              styles={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  width: "100%",
                  height: 50,
                }}
              >
                <Input
                  name="username"
                  type="input"
                  label="Username"
                  placeholder={user.name}
                  disabled
                />
                <Input
                  name="email"
                  type="input"
                  label="Email"
                  placeholder={user.email}
                  disabled
                />
              </div>
              <Input type="textarea" placeholder="Bio" name="bio" rows={6} />
              <Button
                type="primary"
                style={{ padding: 20, fontWeight: 600, fontSize: 16 }}
              >
                Save Changes
              </Button>
            </Content>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <Typography.Title
              level={3}
              style={{ fontSize: 25, fontWeight: 700 }}
            >
              Theme Settings
            </Typography.Title>
            <ThemeSwitch />
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col
            style={{
              paddingLeft: 20,
              width: "100%",
            }}
          >
            <Logout />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
