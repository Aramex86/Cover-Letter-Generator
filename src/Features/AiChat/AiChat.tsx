import { Button, Card, Form } from "antd";
import { Content, Input } from "../../Shared/Atom";
import SendIcon from "../../Shared/assets/send.png";
import { getOpenAIResponse } from "../../Entities";
import { useForm } from "antd/es/form/Form";
const gridStyleOptions: React.CSSProperties = {
  width: "15%",
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

  const handleSubmit = async () => {
    const input = form.getFieldValue("message");
    const result = await getOpenAIResponse(input);
    form.setFieldsValue({ response: result });
    form.resetFields(["message"]);
  };
  return (
    <Form form={form} component={false}>
      <Content>
        <Card title="Generate Cover Letter">
          <Card.Grid style={gridStyleOptions}>options</Card.Grid>
          <Card.Grid style={gridStyleChat}>
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
                type="input"
                width="90%"
              />
              <Button
                type="primary"
                onClick={handleSubmit}
                onKeyUp={handleSubmit}
              >
                <img src={SendIcon} alt="Send" className="theme-icon" />
              </Button>
            </Content>
          </Card.Grid>
        </Card>
      </Content>
    </Form>
  );
}
