import React from 'react';
import { Layout, Row, Col } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ marginRight: '16px' }}>
          <BellOutlined style={{ fontSize: '14px', color: '#73af4b' }} />
        </div>
        <div style={{ marginRight: '16px' }}>
          <UserOutlined style={{ color: '#73af4b' }} />
        </div>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <div style={squareStyle}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>Nitrogênio</h3>
              <p style={textStyle}>Quantidade: X</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={squareStyle}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>Fósforo</h3>
              <p style={textStyle}>Quantidade: Y</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={squareStyle}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>Potássio</h3>
              <p style={textStyle}>Quantidade: Z</p>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <div style={squareStyle}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>pH</h3>
              <p style={textStyle}>Quantidade: V</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={squareStyle}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>Temperatura</h3>
              <p style={textStyle}>Quantidade: T</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ ...squareStyle, marginBottom: '24px' }}>
              <h3 style={{ ...textStyle, color: '#73af4b' }}>Umidade</h3>
              <p style={textStyle}>Quantidade: U</p>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

const squareStyle = {
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyle = {
  textAlign: 'center',
};

export default Dashboard;
