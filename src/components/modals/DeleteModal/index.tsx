import React, { type FC } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDeleteModel } from 'store/slices/general';
import { removeHotel } from 'store/slices/hotels';

const DeleteModal: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(({ general }: any) => general);
  const hotelState = useSelector(({ hotels }: any) => hotels);
  const { deleteModal } = generalState;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOk = () => {
    dispatch(removeHotel(hotelState.selectedHotel));
    dispatch(toggleDeleteModel(false));
  };
  return (
    <Modal
      title="Hata"
      open={deleteModal}
      footer={[
        <Button key={1} onClick={handleOk}>
          Hayır
        </Button>,
        <Button key={1} type="primary" danger onClick={handleOk}>
          Evet
        </Button>,
      ]}
    ></Modal>
  );
};

export default DeleteModal;
