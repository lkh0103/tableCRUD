import React from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import FormShema from '../partials/FormSchema'
import ModalCRUD from '../partials/Modal'
import Toast from '../partials/Toast'

export default function UpdatePage(props: any) {

  const { data, update } = useCRUD();

  const getReturnUpdateAPI = (value: any) => {
    if (value) {
      update(value)
    }
  }

  return (
    <div>
      {props.schemaForm ? (
        <FormShema propsFormSchema={props.schemaForm} />
      ) : (
        <FormCRUD
          data={data}
          title={Object.keys(data[0])}
          updateUserData={getReturnUpdateAPI}
        />
      )}
      <Toast />
      {/* <ModalCRUD /> */}
    </div>
  )
}