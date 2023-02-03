import React, { type FC, useEffect, useState } from 'react';
import { Button, Dropdown, type MenuProps } from 'antd';
import { DownOutlined, SwapOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeSort } from 'store/slices/hotels';
import cn from 'classnames';
import './ListingHeader.scss';

const ListingHeader: FC = () => {
  const dispatch = useDispatch();
  const [selectedSortingKey, setSelectedSortingKey] = useState<string>();
  const [label, setLabel] = useState<string>();
  const hotelState = useSelector(({ hotels }: any) => hotels);
  const { sortBy } = hotelState;
  const sortingHandler: MenuProps['onClick'] = e => {
    setSelectedSortingKey(e.key);
    dispatch(changeSort(e.key));
  };
  const items: MenuProps['items'] | any[] = [
    {
      key: 'ascend',
      label: 'Puan (Artan)',
    },
    {
      key: 'descend',
      label: 'Puan (Azalan)',
    },
  ];
  const dropdownLabelHandler: any = () => {
    const labelName = selectedSortingKey ? items.find(x => x?.key === selectedSortingKey).label : 'Sıralama';
    setLabel(labelName);
  };
  useEffect(() => {
    dropdownLabelHandler();
  }, [selectedSortingKey]);
  return (
    <div className={cn('listing-header-wrapper')}>
      <Dropdown
        menu={{
          items,
          onClick: sortingHandler,
          selectable: true,
          defaultSelectedKeys: [sortBy],
        }}
        trigger={['click']}
      >
        <Button>
          <SwapOutlined style={{ transform: 'rotate(90deg)' }} />
          {label}
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default ListingHeader;
