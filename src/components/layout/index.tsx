import React, { type FC } from 'react';
import { Layout, Menu } from 'antd';
import menuItems from 'constants/menuItems';
import { Outlet, useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import cn from 'classnames';
import './Layout.scss';

const { Content, Footer, Sider } = Layout;

const AppLayout: FC = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const handleMenuClick = (menuItem: any): void => {
    navigate(menuItem.item.props.href);
  };
  return (
    <Layout className={cn('main-wrapper')}>
      <Content className={cn('content-wrapper')}>
        <Layout className={cn('content-sub-layout')}>
          <Sider className={cn('content-aside')} collapsed={width ? width <= 560 : false}>
            <>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
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
