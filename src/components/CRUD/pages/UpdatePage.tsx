import React from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import FormCRUD from '../partials/Form'
import Title from '../partials/Title'
import Toast from '../partials/Toast'

export default function UpdatePage(value: any) {

  const { data, title } = useCRUD();

  return (
    <div>
      <FormCRUD
        data={data}
        title={title}
      />
    </div>
  )
}