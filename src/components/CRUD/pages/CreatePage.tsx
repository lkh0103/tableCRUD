import { Button } from "antd";
import React from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";

export default function CreatePage(props: any) {

  const { data, createData } = useCRUD();
  const [form] = Form.useForm();
  const [dataInput, setDataInput] = useState<any>();

  const handleSubmit = () => {
    createData(dataInput)
  };

  const onFormChange = (data: any) => {
    setDataInput(data);
  };


  return (
    <div>
      <Title />
      {props.formSchema ? (
        <FormShema propsFormSchema={props.formSchema} />
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