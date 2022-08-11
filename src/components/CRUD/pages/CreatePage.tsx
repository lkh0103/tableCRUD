import React from "react";

import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";
import Toast from "../partials/Toast";

export default function CreatePage(props: any) {

  const { data, createData } = useCRUD()
  const createUser = (value: any) => {
    createData(value)
  }
  // const createUser = async (value: string) => {
  //   const addUser = await createData(value)
  //   // console.log(value)
  //   if (addUser) {
  //     toast(addUser.message)
  //   } else {
  //     toast('Error')
  //   }
  // }

  return (
    <div>
      <Title />
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