import React from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import FormShema from '../partials/FormSchema'
import ModalCRUD from '../partials/Modal'
import Toast from '../partials/Toast'

export default function UpdatePage(props: any) {

  const { data, updateData, deleteData } = useCRUD();
  const getReturnUpdateAPI = (value: any) => {
    updateData(value)
  }
  // console.log(props.dataEdit.rows);

  const getReturnDeleteAPI = (id: string) => {
    deleteData(id)
  }

  return (
    <div>
      {props.schemaForm ? (
        <FormShema propsFormSchema={props.schemaForm} />
      ) : (
        <FormCRUD
          data={props.dataEdit.rows}
          title={Object.keys(data[0])}
          getReturnUpdateAPI={getReturnUpdateAPI}
          delData={getReturnDeleteAPI}
        />
      )}
      <Toast />
      {/* <ModalCRUD /> */}
    </div>
  )
}