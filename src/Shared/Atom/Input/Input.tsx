import { ConfigProvider, Input as AppInput, Form, Typography } from "antd";
import React from "react";
const { TextArea: AppTextarea } = AppInput;

interface InputProps {
  label?: string | React.ReactNode;
  name: string;
  placeholder?: string;
  type?: "textarea" | "input";
  autoSize?: boolean;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  label,
  name,
  placeholder,
  type,
  autoSize,
  rows,
  value,
  defaultValue,
  onChange,
}: InputProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlockLG: 8,
          },
        },
      }}
    >
      <Form.Item
        label={
          <Typography style={{ fontWeight: 500, fontSize: 16 }}>
            {label}
          </Typography>
        }
        name={name}
        labelCol={{ span: 24 }}
        initialValue={defaultValue}
      >
        {type === "input" ? (
          <AppInput
            name={name}
            placeholder={placeholder}
            size="large"
            value={value}
            onChange={onChange}
          />
        ) : (
          <AppTextarea
            name={name}
            placeholder={placeholder}
            size="large"
            autoSize={rows ? { minRows: rows, maxRows: rows } : autoSize}
            value={value}
          />
        )}
      </Form.Item>
    </ConfigProvider>
  );
}
