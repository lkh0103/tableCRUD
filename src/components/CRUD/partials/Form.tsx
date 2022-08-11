import React, { useEffect } from "react";
import { Button, Form, Input, Upload } from "antd";
import Toast from "../partials/Toast";

export default function FormCRUD(props: any) {

  const [form] = Form.useForm();

  if (props.data) {
    useEffect(() => {
      form.setFieldsValue(props.data);
    }, [props.data]);
  }
  const onFinish = (value: any) => {
    form.resetFields();
    if (!props.data) {
      props.createUser(value)
    }
    else {
      props.updateUser(value)
    }
  };

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 }
  }

  return (
    <div>
      <div>
        <Form {...layout} form={form} onFinish={onFinish}>
          {props.title.map((item: any, index: number) => (
            <Form.Item key={item} name={item} label={item} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ))}
        </Form>
        <Button onClick={form.submit}>Submit</Button>
        <Toast />
      </div>
    </div>
  );
}

