import { useForm } from "antd/es/form/Form";
import { Layout, Preview } from "../../Shared/Molecules";
import { Button, Flex, Form } from "antd";
import { Content, Input } from "../../Shared/Atom";
import { templateOne, templateTwo } from "../../Entities";
import { useTemplateStore } from "../../Entities/TemplateStore/templateStore";

export default function Home() {
  const [form] = useForm();
  const template = useTemplateStore((state) => state.template);
  const setTemplate = useTemplateStore((state) => state.setTemplate);

  const handleSetTemplate = () => {
    setTemplate(template === templateOne ? templateTwo : templateOne);
    form.setFieldsValue({
      output: template,
    });
  };

  return (
    <Form form={form}>
      <Layout>
        <Content>
          <Input
            label="Your Name"
            name="name"
            placeholder="John Doe"
            type="input"
            defaultValue="Veaceslav Bezuşco"
          />
          <Input
            label="Your Email"
            name="email"
            placeholder="john.doe@example.com"
            type="input"
            defaultValue="slavbez@gmail"
          />
          <Input
            label="Your Phone"
            name="phone"
            placeholder="+1234567890"
            type="input"
            defaultValue="+373 62 169 030"
          />
          <Input
            label="Company Name"
            name="companyName"
            placeholder="Acme Inc."
            type="input"
          />
          <Input
            label="Manager Name"
            name="manager"
            placeholder="Hiring Manager’s Name"
            type="input"
          />

          <Input
            label="Position"
            name="role"
            placeholder="Software Engineer"
            type="input"
          />

          <Flex gap={10} style={{ marginBottom: 20 }} wrap>
            <Button onClick={handleSetTemplate}>Select template 1</Button>
            <Button onClick={handleSetTemplate}>Select template 2</Button>
          </Flex>

          <Flex gap={10} wrap>
            <Button
              onClick={() => console.log(form?.getFieldsValue(true))}
              style={{ padding: "22px 10px" }}
              type="primary"
              disabled
            >
              Generate Cover Letter with AI
            </Button>
            <Button
              onClick={() => form?.resetFields()}
              style={{ padding: "22px 10px" }}
              type="primary"
            >
              Reset Form
            </Button>
          </Flex>
        </Content>
        <Content>
          <Preview form={form} />
        </Content>
      </Layout>
    </Form>
  );
}
