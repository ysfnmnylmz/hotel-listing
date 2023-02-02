import React, { type FC } from 'react';
import { Button, Modal, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDeleteModel } from 'store/slices/general';
import { removeHotel } from 'store/slices/hotels';
import cn from 'classnames';
import './DeleteModal.scss';

const DeleteModal: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(({ general }: any) => general);
  const hotelState = useSelector(({ hotels }: any) => hotels);
  const { deleteModal } = generalState;
  const handleOk = (): void => {
    dispatch(removeHotel(hotelState.selectedHotel));
    dispatch(toggleDeleteModel(false));
  };
  const handleCancel = (): void => {
    dispatch(toggleDeleteModel(false));
  };
  return (
    <Modal
      title="Hata"
      open={deleteModal}
      onCancel={handleCancel}
      footer={[
        <Button className={cn('remove-button')} key={1} type="primary" danger onClick={handleOk}>
          OTELİ SİL
        </Button>,
        <Button key={1} className={cn('cancel-button')} onClick={handleCancel}>
          VAZGEÇ
        </Button>,
      ]}
    >
      <Typography>isimli oteli silmek istiyor musun?</Typography>
    </Modal>
  );
};

export default DeleteModal;
