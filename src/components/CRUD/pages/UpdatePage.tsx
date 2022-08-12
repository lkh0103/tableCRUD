import React from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import FormShema from '../partials/FormSchema'
import ModalCRUD from '../partials/Modal'
import Title from '../partials/Title'

export default function UpdatePage(props: any) {

  const { data, updateData, deleteData } = useCRUD();
  const updateUser = (value: any) => {
    updateData(value)
  }

  const deleteUser = (id: string) => {
    deleteData(id)
  }

  return (
    <div>
      <Title />
      {props.schemaForm ? (
        <FormShema propsFormSchema={props.schemaForm} />
      ) : (
        <FormCRUD
          data={props.dataEdit.rows}
          title={Object.keys(data[0])}
          updateUser={updateUser}
        />
      )}
      <ModalCRUD
        data={props.dataEdit.rows}
        delData={deleteUser}
      />
    </div>
  )
}