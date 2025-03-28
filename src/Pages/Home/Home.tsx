import { useForm } from "antd/es/form/Form";
import { Layout, Preview } from "../../Shared/Molecules";
import { Button, Flex, Form } from "antd";
import { Content, Input } from "../../Shared/Atom";
import { templateOne, templateTwo } from "../../Entities";
import { RiRobot2Line } from "react-icons/ri";
import { useTemplateStore } from "../../Entities/TemplateStore/templateStore";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../Entities/UserDataStore/userStore";
import { useGetUserById } from "../../Entities/hooks";
export default function Home() {
  const navigate = useNavigate();
  const [form] = useForm();
  const template = useTemplateStore((state) => state.template);
  const setTemplate = useTemplateStore((state) => state.setTemplate);
  const setUser = useUserStore((state) => state.setUser);
  // const user = useUserStore((state) => state.user);

  useGetUserById();

  // console.log(user, "user");
  const handleSetTemplate = () => {
    setTemplate(template === templateOne ? templateTwo : templateOne);
    form.setFieldsValue({
      output: template,
    });
  };

  const handleSetUserData = () => {
    const { name, email, phone, companyName, role, stack } =
      form.getFieldsValue([
        "name",
        "email",
        "phone",
        "companyName",
        "role",
        "stack",
      ]);
    setUser({ name, email, phone, companyName, role, stack });
  };

  return (
    <Form form={form}>
      <Layout styles={{ display: "flex", gap: 20, flexDirection: "row" }}>
        <Content>
          <Flex gap={10} style={{ marginBottom: 20 }} wrap>
            <Button onClick={handleSetTemplate} type="primary">
              Select template 1
            </Button>
            <Button onClick={handleSetTemplate} type="primary">
              Select template 2
            </Button>
            <Button
              onClick={() => {
                navigate("/chat");
                handleSetUserData();
              }}
              type="default"
              style={{
                background: "#28a36a",
                color: "#ffffff",
                fontWeight: 500,
              }}
              icon={<RiRobot2Line size={18} />}
            >
              Generate Cover Letter with AI
            </Button>
          </Flex>

          <Input
            label="Company Name"
            name="companyName"
            placeholder="Acme Inc."
            type="input"
          />

          <Input
            label="Position"
            name="role"
            placeholder="Software Engineer"
            type="input"
          />
          <Input
            label="Technology Stack"
            name="stack"
            placeholder="Enter your stack..."
            type="input"
          />
        </Content>
        <Content styles={{ marginTop: 50 }}>
          <Preview form={form} />
        </Content>
      </Layout>
    </Form>
  );
}
