import { type MenuProps } from 'antd';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const MenuList = [
  {
    icon: UserOutlined,
    name: 'Otel Listesi',
    href: '/',
  },
  {
    icon: LaptopOutlined,
    name: 'Otel Ekle',
    href: 'otel-ekle',
  },
];

const menuItems: MenuProps['items'] = MenuList.map((menu, index) => {
  const key = String(index + 1);
  const menuItemObj = {
    key: `sub${key}`,
    label: menu.name,
    href: menu.href,
  };
  if (menu.icon) {
    menuItemObj.icon = React.createElement(menu.icon);
  }
  return menuItemObj;
});

export default menuItems;
