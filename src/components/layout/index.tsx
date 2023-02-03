import React, { type FC, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import menuItems, { MenuList } from 'constants/menuItems';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import cn from 'classnames';
import './Layout.scss';
import { useDispatch } from 'react-redux';
import { changeSort } from '../../store/slices/hotels';

const { Content, Footer, Sider } = Layout;

const AppLayout: FC = () => {
  const navigate = useNavigate();
  const [defaultActiveMenu, setDefaultActiveMenu] = useState<string>('1');
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const handleMenuClick = (menuItem: any): void => {
    dispatch(changeSort('descend'));
    navigate(menuItem.item.props.href);
  };
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const defaultMenuActive = String(MenuList.findIndex(m => pathname === m.href) + 1) || '1';
    setDefaultActiveMenu(defaultMenuActive);
  }, [pathname]);
  return (
    <Layout className={cn('main-wrapper')}>
      <Content className={cn('content-wrapper')}>
        <Layout className={cn('content-sub-layout')}>
          <Sider className={cn('content-aside')} collapsed={width ? width <= 560 : false}>
            <>
              <Menu
                mode="inline"
                defaultSelectedKeys={[defaultActiveMenu]}
                selectedKeys={[defaultActiveMenu]}
                style={{ height: '100%' }}
                items={menuItems}
                onClick={handleMenuClick}
              />
            </>
          </Sider>
          <Content className={cn('content-main')}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer className={cn('footer')}>Frontend Challenge 379</Footer>
    </Layout>
  );
};

export default AppLayout;
