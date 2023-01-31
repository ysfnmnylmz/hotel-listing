import React, { type FC } from 'react';
import { Button, Modal } from 'antd';

const DeleteModal: FC = () => {
  const handleOk = (a: any) => {
    alert(a);
  };
  return (
    <Modal
      title="Hata"
      // open={errorState.status}
      footer={[
        <Button key={1} type="primary" onClick={handleOk}>
          Ok
        </Button>,
      ]}
    ></Modal>
  );
};

export default DeleteModal;
