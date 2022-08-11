import { Alert } from "antd";
import React, { useState } from "react";

import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";
import Toast from "../partials/Toast";

export default function CreatePage(props: any) {

  // const [error, setError] = useState<string>('')
  const { data, createData } = useCRUD()
  const createUser = (value: any) => {
    createData(value)
  }

  return (
    <div>
      <Title />
      {/* {
        error && <Alert message="Error Text" type="error" />
      } */}
      {props.formSchema ? (
        <FormShema propsFormSchema={props.formSchema} />
      ) : (
        <FormCRUD
          title={Object.keys(data[0])}
          createUser={createUser}
        />
      )}
      <Toast
        title={Object.keys(data[0])}
        createUser={createUser}
      />
    </div>
  )
}