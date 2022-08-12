import React, { useState } from 'react'
import { JSONSchema7 } from "json-schema";
import Form from "@rjsf/core";

export default function FormShema(props: any) {

  const [formInput, setFormInput] = useState<any>()
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