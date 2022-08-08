import { Button } from "antd";
import React from "react";
import { toast } from "react-toastify";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Title from "../partials/Title";


export default function CreatePage(props: any) {

  const { data, createData } = useCRUD()
  const getReturnCreatAPI = async (value: string) => {
    const addUser = await createData(value)
    // console.log(value)
    if (addUser) {
      toast(addUser.message)
    } else {
      toast('Error')
    }
  }

  return (
    <div>
      <Title /><br />
      {props.schemaForm ? (
        <FormShema propsFormSchema={props.schemaForm} />
      ) : (
        <FormCRUD
          title={Object.keys(data[0])}
          getReturnCreatAPI={getReturnCreatAPI}
        />
      )}
      <button onClick={getReturnCreatAPI}>Click</button>
      {/* <Toast /> */}
    </div>
  )
}