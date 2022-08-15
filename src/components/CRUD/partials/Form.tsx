import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload } from "antd";

export default function FormCRUD(props: any) {

  const [inputForm, setInputForm] = useState<any>();

  if (props.data) {
    useEffect(() => {
      props.form.setFieldsValue(props.data);
    }, [props.data]);
  }

  useEffect(() => {
    props.onFormChange(inputForm);
  }, [inputForm]);

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 }
  }

  return (
    <div>
      <div>
        <Form
          {...layout}
          form={props.form}
          onValuesChange={(changedValues, allValues) => {
            setInputForm(allValues);
          }}
        >
          {props.title.map((item: any) => (
            <Form.Item key={item} name={item} label={item} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ))}
        </Form>
      </div>
    </div>
  );
}

