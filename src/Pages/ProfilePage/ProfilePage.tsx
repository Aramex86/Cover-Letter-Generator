import { Logout, ThemeSwitch } from "../../Features";
import { Button, Col, Divider, Form, Row, Switch, Typography } from "antd";
import { Avatar, Content, Helper, Input } from "../../Shared/Atom";
import { useFetchUserDetail, useGetUserById } from "../../Entities/hooks";
import { FaRegCircleUser } from "react-icons/fa6";
import { Layout } from "../../Shared/Molecules";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../Shared/hooks";
import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { updateUser } from "../../Entities/service/db";
import { useThemeStore, useUserStore } from "../../Entities";

export default function ProfilePage() {
  const [checked, setChecked] = useState(false);
  const [form] = Form.useForm();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const theme = useThemeStore((state) => state.isDark);
  const { user } = useUserStore();
  const { googleUser } = useFetchUserDetail();

  useGetUserById();
  const handleBack = () => {
    navigate("/");
  };

  console.log(user, "user");
  console.log(googleUser, "googleUser");
  const handleSave = async () => {
    // console.log(form.getFieldsValue(), "HERE");

    const newUser = form.getFieldsValue();

    // console.log(
    //   {
    //     ...user,
    //     ...newUser,
    //     id: user.id,
    //     isDark: theme,
    //     picture: user.picture,
    //   },
    //   "newUser"
    // );

    await updateUser({
      ...newUser,
      ...user,
      id: user.id,
      email: checked ? user.email : newUser.otherEmail,
      isDark: theme,
      picture: user.picture,
    });

    // setUser({ ...user, ...newUser });
    form.resetFields();
  };

  return (
    <Form component={false} form={form}>
      <Layout>
        <Content
          styles={{
            width: isMobile ? "100%" : "80%",
            margin: "0 auto",
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            boxShadow: " 0px 0px 9px 3px #1616162e",
            borderRadius: "10px 10px 0 0",
            paddingBottom: 20,
          }}
        >
          <Row
            justify="start"
            style={{
              background: "#3b82f6",
              padding: 15,
              marginBottom: 20,
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <Col span={2}>
              <Avatar
                src={user?.picture}
                icon={<FaRegCircleUser />}
                title=""
                size={isMobile ? 60 : 100}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: isMobile ? 40 : 20,
              }}
            >
              <Typography
                style={{
                  fontSize: isMobile ? 20 : 25,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {user?.name}
              </Typography>
              <Typography style={{ fontSize: 18, color: "#ffffff" }}>
                {user?.email}
              </Typography>
            </Col>
          </Row>
          <Row style={{ paddingLeft: 20 }}>
            <Button
              type="primary"
              onClick={handleBack}
              icon={<IoIosArrowBack />}
              style={{
                width: 100,
                marginBottom: 20,
                padding: `${isMobile && "20px 20px"}`,
              }}
            >
              Back
            </Button>
          </Row>
          <Row style={{ marginTop: 30 }} justify="start">
            <Col
              span={isMobile ? 24 : 15}
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Typography.Title
                level={3}
                style={{ fontSize: 25, fontWeight: 700 }}
              >
                Bio
              </Typography.Title>
              <Typography style={{ fontSize: 18 }}>
                {!user?.bio
                  ? `Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.`
                  : user?.bio}
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
                paddingRight: 20,
              }}
            >
              <Typography.Title
                level={3}
                style={{
                  fontSize: 25,
                  fontWeight: 700,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Settings
                <Helper helperText="Use google user data or enter your own" />
                <Switch
                  defaultChecked
                  onChange={() => setChecked(!checked)}
                  checkedChildren={<FaUserCheck />}
                  unCheckedChildren={<FaGoogle />}
                />
              </Typography.Title>
              <Content
                styles={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  width: "100%",
                }}
              >
                {checked ? (
                  <>
                    <Divider plain>Data from Google</Divider>
                    <Row
                      style={{
                        display: "flex",
                        width: "100%",
                        gap: 15,
                      }}
                    >
                      <Input
                        name="name"
                        type="input"
                        label="Username"
                        placeholder={user.name}
                        defaultValue={user.name}
                        width={"49%"}
                        // disabled
                      />
                      <Input
                        name="email"
                        type="input"
                        label="Email"
                        placeholder={user.email}
                        width={"49%"}
                        defaultValue={user.email}
                      />
                      <Input
                        label="Your Phone"
                        name="phone"
                        placeholder="+373 62 169 030"
                        type="input"
                        // defaultValue="+373 62 169 030"
                      />
                    </Row>
                  </>
                ) : (
                  <>
                    <Divider plain>Custom Data</Divider>
                    <Row
                      style={{
                        display: "flex",
                        width: "100%",
                        flexWrap: "wrap",
                        gap: 20,
                      }}
                    >
                      <Input
                        label="Your Name"
                        name="name"
                        placeholder="John Doe"
                        type="input"
                        // defaultValue="Veaceslav Bezuşco"
                      />
                      <Input
                        label="Your Email"
                        name="email"
                        placeholder="john.doe@example.com"
                        type="input"
                        // defaultValue="slavbez@gmail.com"
                      />
                      <Input
                        label="Your Phone"
                        name="phone"
                        placeholder="+1234567890"
                        type="input"
                        // defaultValue="+373 62 169 030"
                      />
                    </Row>
                  </>
                )}
                <Input type="textarea" placeholder="Bio" name="bio" rows={6} />
              </Content>
            </Col>
          </Row>
          <Divider />
          <Row style={{ marginTop: 30 }}>
            <Col
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: 20,
                paddingRight: 20,
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
                display: "flex",
                gap: 20,
              }}
            >
              <Button
                type="primary"
                style={{ padding: 20, fontWeight: 600, fontSize: 16 }}
                onClick={handleSave}
              >
                Save Changes
              </Button>
              <Logout width={150} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Form>
  );
}
