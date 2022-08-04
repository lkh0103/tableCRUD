import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";

export default function FormCRUD(props: any) {

  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    form.resetFields();
    props.createUser(value)
    props.updateUserData(value)
    toast('success')
    console.log(value)
  };

  if (props.data) {
    useEffect(() => {
      form.getFieldValue(props.data);
    }, []);
  }

  return (
    <div>
      <div>
        <Form form={form} onFinish={onFinish}>
          {props.title.map((item: any, index: number) => (
            <Form.Item key={item} name={item} label={item}>
              <Input />
            </Form.Item>
          ))}
        </Form>
        <Button onClick={form.submit}>Submit</Button>
      </div>
    </div>
  );
}