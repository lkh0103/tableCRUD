import React from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Toast from "../partials/Toast";

export default function CreatePage(props: any) {

  const { data, create } = useCRUD()

  const getReturnCreatAPI = (value: any) => {
    if (value) {
      create(value)
    }
  }

  return (
    <div>
      {props.schemaForm ? (
        <FormShema propsFormSchema={props.schemaForm} />
      ) : (
        <FormCRUD
          title={Object.keys(data[0])}
          createUser={getReturnCreatAPI}
        />
      )}
      <Toast />
    </div>
  )
}