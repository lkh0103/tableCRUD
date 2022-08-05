import { Button, Modal } from 'antd';
import React, { useState } from 'react'

export default function ModalCRUD() {

  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('Are you sure?');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('Accept Delete');

  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal
        title="Delete"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
