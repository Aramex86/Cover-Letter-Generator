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
  width?: string | number;
  disabled?: boolean;
  mask?: string;
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
  width = "100%",
  disabled,
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
        style={{ width }}
      >
        {type === "input" ? (
          <AppInput
            name={name}
            placeholder={placeholder}
            size="large"
            value={value}
            onChange={onChange}
            // style={{ width }}
            disabled={disabled}
          />
        ) : (
          <AppTextarea
            name={name}
            placeholder={placeholder}
            size="large"
            autoSize={rows ? { minRows: rows, maxRows: rows } : autoSize}
            value={value}
            style={{ width }}
          />
        )}
      </Form.Item>
    </ConfigProvider>
  );
}
