import { Button, Form } from "antd";
import React, { useState } from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";

interface CreatePageProps {
  formSchema: any;
  formComponent: any;
}

export default function CreatePage(props: CreatePageProps) {

  const { data, createData } = useCRUD();
  const [form] = Form.useForm();
  const [dataInput, setDataInput] = useState<any>();

  const handleSubmit = () => {
    form.resetFields();
    // form.validateFields();
    if (props.formSchema) {
      createData(dataInput);
    }
    if (props.formComponent) {
      createData(dataInput);
    } else {
      if (
        dataInput.id === undefined ||
        dataInput.username === undefined ||
        dataInput.email === undefined ||
        dataInput.password === undefined ||
        dataInput.avatar === undefined ||
        dataInput.registeredAt === undefined
      ) {
        !form.isFieldsTouched(true) ||
          form.getFieldsError().filter(({ errors }) => errors.length).length > 0;
      } else {
        if (dataInput) {
          createData(dataInput);
          setDataInput(null);
        }
      }
    }
  };

  const onFormChange = (data: any) => {
    setDataInput(data);
  };

  return (
    <div>
      <Title />
      {props.formSchema ? (
        <FormShema formSchema={props.formSchema} setDataInput={setDataInput} />
      ) : props.formComponent ? (
        props.formComponent(onFormChange)
      ) : (
        <FormCRUD
          form={form}
          title={Object.keys(data[0])}
          onFormChange={onFormChange}
        />
      )}
      <Button type="primary" style={{ marginLeft: 20 }} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}