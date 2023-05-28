import React from 'react';
import { Layout, Row, Col } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { FaThermometerFull } from 'react-icons/fa';
import { ImDroplet } from 'react-icons/im';
import { MdScience } from 'react-icons/md';
import Grafico from './Grafico';
import { TbLetterN, TbLetterP, TbLetterK } from 'react-icons/tb';

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Header
        style={{
          background: '#f5f5f5',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ marginRight: '16px' }}>
          <BellOutlined style={{ fontSize: '14px', color: '#73af4b' }} />
        </div>
        <div style={{ marginRight: '16px' }}>
          <UserOutlined style={{ color: '#73af4b' }} />
        </div>
      </Header>
      <Content style={{ padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <TbLetterN style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>Nitrogênio</h3>
                <p style={textStyle}>Quantidade: X</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <TbLetterK style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>Fósforo</h3>
                <p style={textStyle}>Quantidade: Y</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <TbLetterP style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>Potássio</h3>
                <p style={textStyle}>Quantidade: Z</p>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <MdScience style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>pH</h3>
                <p style={textStyle}>Quantidade: V</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <FaThermometerFull style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>Temperatura</h3>
                <p style={textStyle}>Quantidade: T</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <div style={squareStyle}>
                <div style={circleStyle}>
                  <ImDroplet style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <h3 style={{ ...textStyle, color: '#73af4b' }}>Umidade</h3>
                <p style={textStyle}>Quantidade: U</p>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div style={squareStyle}>
                <Grafico />
              </div>
            </Col>
          </Row>
        </div>
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

const circleStyle = {
  width: '48px',
  height: '48px',
  background: '#73af4b',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
};

const textStyle = {
  textAlign: 'center',
};

export default Dashboard;
