import React, { useEffect } from "react";
import { useCRUD } from "../hooks/CRUDProvider";
import Form from "../partials/Form";
import FormShema from "../partials/FormSchema";
import ModalList from "../partials/Modal";
import Title from "../partials/Title";

export default function CreatePage(loadingForm: any) {
  const { data, title, showList } = useCRUD();

  useEffect(showList, []);

  return (
    <div>
      {/* <Title /> */}
      {/* <ModalList /> */}
      {loadingForm.loadingForm ? (
        <FormShema props={loadingForm.loadingForm} />
      ) : (
        <Form 
        data={data} 
        title={title} />
      )}
    </div>
  );
}