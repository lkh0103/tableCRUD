import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { toast } from "react-toastify";
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
      props.getReturnCreatAPI(value)
    }
    else {
      props.getReturnUpdateAPI(value)
    }
  };

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
        <Toast />
      </div>
    </div>
  );
}

// if (value) {
//   toast('success')
// } else {
//   if (value === '') {
//     toast('error')
//   }
// }