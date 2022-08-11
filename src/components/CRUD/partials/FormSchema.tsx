import React, { useState } from 'react'
import { JSONSchema7 } from "json-schema";
import Form from "@rjsf/core";

export default function FormShema(props:any) {

    const [formInput,setFormInput]=useState<any>()
    const schema = props.propsFormSchema ;
      console.log(formInput);
      
  return (
    <div>
        <Form   
        schema={schema as JSONSchema7}
        formData={formInput}
        // onChange={e=>setFormInput(e.formData)}
        onSubmit={(e)=>setFormInput(e.formData)}
        />
    </div>  
  )
}