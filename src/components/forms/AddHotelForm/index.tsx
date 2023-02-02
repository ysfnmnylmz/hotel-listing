import React, { type FC, useEffect, useState } from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { addHotel } from 'store/slices/hotels';
import generateGUID from 'helpers/generateGUID';
import cn from 'classnames';
import './AddHotelForm.scss';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { type IHotel } from 'components/cards/HotelCard/hotel.interface';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AddHotelForm: FC = () => {
  const [addForm] = Form.useForm();
  const dispatch = useDispatch();
  const [addCompleted, setAddCompleted] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const formSubmit = (values: IHotel) => {
    const hotelObject = {
      ...values,
      id: generateGUID(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      points: 0.0,
      image: imageUrl && imageUrl,
    };
    dispatch(addHotel(hotelObject));
    setAddCompleted(true);
  };
  useEffect(() => {
    if (addCompleted) {
      setTimeout(() => {
        addForm.resetFields();
        setAddCompleted(false);
      }, 1500);
    }
  }, [addCompleted]);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    getBase64(info.file.originFileObj as RcFile, url => {
      setImageUrl(url);
    });
  };
  return (
    <Form form={addForm} onFinish={formSubmit} className={cn('add-hotel-form')}>
      <Form.Item label="Otel Adı" name="name" rules={[{ required: true, message: 'Lütfen otel ismini giriniz!' }]}>
        <Input placeholder="Otel Adı" />
      </Form.Item>
      <Form.Item label="Otel Resmi" name="image">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="hotel image" style={{ width: '100%' }} /> : <div>Fotoğraf Seç</div>}
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={cn(addCompleted && 'added')}>
          {addCompleted ? 'Eklendi' : 'Ekle'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddHotelForm;
