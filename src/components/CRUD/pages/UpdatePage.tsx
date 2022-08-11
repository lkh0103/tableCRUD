import React from 'react'
import { Alert, message } from 'antd'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import FormShema from '../partials/FormSchema'
import ModalCRUD from '../partials/Modal'
import Title from '../partials/Title'

export default function UpdatePage(props: any) {

  // const [error, setError] = useState<string>('')
  const { data, updateData, deleteData } = useCRUD();
  const updateUser = (value: any) => {
    updateData(value)
    // if (updateDT) {
    //   message.success('This is a success message');
    // }
  }

  const deleteUser = (id: string) => {
    deleteData(id)
  }

  return (
    <div>
      <Title />
      {/* {
        error && (
          <Alert message={error} type="error" />
        )
      } */}
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