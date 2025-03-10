import { Button, Form, FormInstance, Typography } from "antd";
import { Input } from "../../Atom";
import { useEffect } from "react";
import { replaceTemplateVariables } from "../../libs";
import { useTemplateStore } from "../../../Entities/TemplateStore/templateStore";

interface PreviewProps {
  form?: FormInstance;
}

export default function Preview({ form }: PreviewProps) {
  const template = useTemplateStore((state) => state.template);
  const userName = Form.useWatch("name", form) || "Veaceslav Bezuşco";
  const email = Form.useWatch("email", form) || "slavbez@gmail.com";
  const phone = Form.useWatch("phone", form) || "+373 62169030";
  const company = Form.useWatch("companyName", form) || "{{company}}";
  const manager = Form.useWatch("manager", form) || "{{manager}}";
  const role = Form.useWatch("role", form) || "{{role}}";

  const templateValues = {
    name: userName,
    email,
    phone,
    company,
    manager,
    role,
    date: `${new Date().toLocaleString("default", {
      month: "long",
    })} ${new Date().getDate()} , ${new Date().getFullYear()}`,
  };

  const finalTemplate = replaceTemplateVariables(template, templateValues);

  useEffect(() => {
    form?.setFieldsValue({
      output: finalTemplate,
    });
  }, [finalTemplate, form]);

  const handleCopyToClipboard = () => {
    const finalTemplate = form?.getFieldValue("output");
    navigator.clipboard.writeText(finalTemplate);
  };
  return (
    <>
      <Form.Item name={"output"} style={{ marginBottom: -10 }}>
        <Input
          label={
            <Typography style={{ fontWeight: 500, fontSize: 18 }}>
              Output
            </Typography>
          }
          name="output"
          placeholder="Your output will go here..."
          type="textarea"
          autoSize
          onChange={(e) => form?.setFieldsValue({ output: e.target.value })}
        />
      </Form.Item>
      <Button
        onClick={handleCopyToClipboard}
        type="primary"
        style={{ width: "100%" }}
      >
        Copy to clipboard
      </Button>
    </>
  );
}
