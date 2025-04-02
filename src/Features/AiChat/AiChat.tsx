import { Button, Card, Form, Typography } from "antd";
import { CardHeader, Content, Input } from "../../Shared/Atom";
import { BiSolidPaperPlane } from "react-icons/bi";
import { getOpenAIResponse, useUserStore } from "../../Entities";
import { useForm } from "antd/es/form/Form";
import { templateGenerationPrompt } from "../../Entities/model/model";
import { useState } from "react";
import { replaceTemplateVariables } from "../../Shared/libs";
import styles from "./ai-chat.module.css";

export default function AiChat() {
  const [chatInput, setChatInput] = useState<string>("");
  const [form] = useForm();
  const user = useUserStore((state) => state.user);
  const addData = useUserStore((state) => state.additionalInfo);

  const handleSelectTemplate = () => {
    addData(form.getFieldsValue(true));
    form.setFieldsValue({
      company: user.companyName,
      role: user.role,
      stack: user.stack,
    });
    setChatInput(templateGenerationPrompt);
  };

  const handleSubmit = async () => {
    const templateValues = {
      ...user,
    };

    const result = await getOpenAIResponse(
      replaceTemplateVariables(chatInput, templateValues, true)
    );
    form.setFieldsValue({ response: result });
    form.resetFields(["message"]);
  };
  return (
    <Form form={form} component={false}>
      <Content>
        <Card title={<CardHeader />} classNames={{ body: "my-card" }}>
          <Card.Grid className={styles.gridStyleOptions}>
            <Typography style={{ fontSize: 25, marginBottom: 30 }}>
              Options
            </Typography>
            <Button onClick={handleSelectTemplate} style={{ marginBottom: 30 }}>
              Use your previous filed data
            </Button>
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
              name="role"
              label="Position"
              placeholder="Enter desire role..."
            />

            <Button
              type="primary"
              onClick={() =>
                navigator.clipboard.writeText(form.getFieldValue("response"))
              }
            >
              Copy to clipboard the response
            </Button>
          </Card.Grid>
          <Card.Grid className={styles.gridStyleChat}>
            {/* <pre>{JSON.stringify(user)}</pre> */}
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
              {/* <Input
                name="message"
                placeholder="Type your message..."
                type="textarea"
                width="90%"
                rows={4}
              /> */}
              <Button
                type="primary"
                onClick={handleSubmit}
                style={{ width: "100%", padding: "20px 0" }}
              >
                Generate cover letter
                <BiSolidPaperPlane size={24} />
              </Button>
            </Content>
          </Card.Grid>
        </Card>
      </Content>
    </Form>
  );
}
