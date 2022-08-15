import React, { useEffect, useState } from "react";
import { JSONSchema7 } from "json-schema";
import Form from "@rjsf/core";

interface FormSchemaProps {
  formSchema: any,
  setDataInput: any
}

export default function FormShema(props: FormSchemaProps) {

  const [formInput, setFormInput] = useState<any>();
  props.setDataInput(formInput)

  return (
    <div>
      <Form
        schema={props.formSchema as JSONSchema7}
        formData={formInput}
        // eslint-disable-next-line react/no-children-prop
        children={true}
        onChange={(e) => setFormInput(e.formData)}
      />
    </div>
  )
}