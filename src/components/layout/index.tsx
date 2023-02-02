import React, { type FC } from 'react';
import { Layout, Menu } from 'antd';
import menuItems from 'constants/menuItems';
import { Outlet, useNavigate } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

const AppLayout: FC = () => {
  const navigate = useNavigate();
  const handleMenuClick = (menuItem: any): void => {
    navigate(menuItem.item.props.href);
  };
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: 'white' }}>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
              items={menuItems}
              onClick={handleMenuClick}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Frontend Challenge 379</Footer>
    </Layout>
  );
};

export default AppLayout;
