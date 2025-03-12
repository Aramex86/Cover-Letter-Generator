import { Button, Card, Form, Typography } from "antd";
import { CardHeader, Content, Input } from "../../Shared/Atom";
import { BiSolidPaperPlane } from "react-icons/bi";
import { getOpenAIResponse, useUserStore } from "../../Entities";
import { useForm } from "antd/es/form/Form";

const gridStyleOptions: React.CSSProperties = {
  width: "20%",
  textAlign: "center",
};
const gridStyleChat: React.CSSProperties = {
  width: "80%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};
export default function AiChat() {
  const [form] = useForm();
  const user = useUserStore((state) => state.user);
  const addData = useUserStore((state) => state.additionalInfo);

  const handleSelectTemplate = () => {
    console.log(form.getFieldsValue(true));
    console.log(user, "User");
    addData(form.getFieldsValue(true));
  };

  const handleSubmit = async () => {
    const input = form.getFieldValue("message");
    const result = await getOpenAIResponse(input);
    form.setFieldsValue({ response: result });
    form.resetFields(["message"]);
  };
  return (
    <Form form={form} component={false}>
      <Content>
        <Card title={<CardHeader />}>
          <Card.Grid style={gridStyleOptions}>
            <Typography>Options</Typography>
            <Button onClick={handleSelectTemplate}>Use your data</Button>
            <Input
              type="input"
              name="stack"
              label="Technology Stack"
              placeholder="Write your stack..."
            />
            <Input
              type="input"
              name="company"
              label="Company"
              placeholder="Company Name..."
            />
            <Input
              type="input"
              name="manager"
              label="Manager Name"
              placeholder="Manager Name..."
            />
            <Input
              type="input"
              name="role"
              label="Position"
              placeholder="Enter desire role..."
            />
          </Card.Grid>
          <Card.Grid style={gridStyleChat}>
            <pre>{JSON.stringify(user)}</pre>
            <Input
              type="textarea"
              name="response"
              placeholder="Your response"
              rows={20}
            />
            <Content
              styles={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                minHeight: 50,
                gap: 15,
                justifyContent: "center",
              }}
            >
              <Input
                name="message"
                placeholder="Type your message..."
                type="textarea"
                width="90%"
                rows={4}
              />
              <Button
                type="primary"
                onClick={handleSubmit}
                style={{ alignSelf: "flex-end" }}
              >
                <BiSolidPaperPlane size={24} />
              </Button>
            </Content>
          </Card.Grid>
        </Card>
      </Content>
    </Form>
  );
}
