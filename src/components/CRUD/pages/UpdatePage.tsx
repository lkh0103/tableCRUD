import { Button, Form } from 'antd'
import React, { useState } from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import FormShema from '../partials/FormSchema'
import ModalCRUD from '../partials/Modal'
import Title from '../partials/Title'

interface UpdatePageProps {
  dataEdit: any;
  formComponent: any;
}

export default function UpdatePage(props: UpdatePageProps) {

  const [dataInput, setDataInput] = useState<any>();
  const { data, updateData, deleteData } = useCRUD();
  const [form] = Form.useForm();

  const onFormChange = (data: any) => {
    setDataInput(data);
  };

  const handleUpdate = () => {
    form.resetFields();
    updateData(dataInput);
  }

  const deleteUser = (id: string) => {
    deleteData(id)
  }

  return (
    <div>
      <Title />
      {props.formComponent ? (
        props.formComponent(onFormChange, props.dataEdit.rows)
      ) : (
        <FormCRUD
          form={form}
          title={Object.keys(data[0])}
          data={props.dataEdit.rows}
          onFormChange={onFormChange}
        />
      )}

      <Button type="primary" style={{ margin: 15 }} onClick={handleUpdate}>
        Update
      </Button>
      <ModalCRUD data={props.dataEdit.rows} deleteData={deleteUser} />
    </div>
  )
}