import React, { type FC } from 'react';
import { Spin } from 'antd';
import cn from 'classnames';
import './Loading.scss';
const Loading: FC = () => {
  return (
    <div className={cn('loading-wrapper')}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
