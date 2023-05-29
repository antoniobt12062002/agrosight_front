import React from 'react';
import { Layout } from 'antd';
import './App';
import Sidebar from '../resources/components/Sidebar';
import Dashboard from '../resources/components/Dashboard';

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={200}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;