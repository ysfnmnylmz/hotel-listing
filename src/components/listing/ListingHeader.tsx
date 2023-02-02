import React, { type FC, useEffect, useState } from 'react';
import { Button, Dropdown, type MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { changeSort } from 'store/slices/hotels';

const ListingHeader: FC = () => {
  const dispatch = useDispatch();
  const [selectedSortingKey, setSelectedSortingKey] = useState<string>();
  const [label, setLabel] = useState<string>();
  const sortingHandler: MenuProps['onClick'] = e => {
    setSelectedSortingKey(e.key);
    dispatch(changeSort(e.key));
  };
  const items: MenuProps['items'] = [
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
    setLabel(
      items.find(x => x?.key === selectedSortingKey)
        ? items?.find(x => x?.key === selectedSortingKey)?.label
        : 'Sıralama'
    );
  };
  useEffect(() => {
    dropdownLabelHandler();
  }, [selectedSortingKey]);
  return (
    <Dropdown
      menu={{
        items,
        onClick: sortingHandler,
        selectable: true,
      }}
      trigger={['click']}
    >
      <Button>
        {label}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ListingHeader;
