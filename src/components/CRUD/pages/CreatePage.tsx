import React, { useState } from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import FormCRUD from "../partials/Form";
import FormShema from "../partials/FormSchema";
import Toast from "../partials/Toast";

export default function CreatePage(schemaForm: any) {
  const { data, create } = useCRUD()
  const [createFormUser, setCreateFormUser] =useState<any>('')
  const createUser = (params: any) => {
    setCreateFormUser({
      ...params,
      
    })
  }

  return (
    <div>
      {schemaForm.schemaForm ? (
        <FormShema props={schemaForm.schemaForm} />
      ) : (
        <FormCRUD
          title={Object.keys(data[0])}
          creatUserProps={create}
        />
      )}
      <Toast />
    </div>
  );
}