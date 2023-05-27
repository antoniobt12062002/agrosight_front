import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { WiDaySunny, WiRain, WiCloud, WiSnow } from 'react-icons/wi';

const { Title, Text } = Typography;

const WeatherWidget = () => {
  const location = 'Apucarana, PR';
  const temperature = '29°C';
  const weatherCondition = 'Ensolarado';

  const renderWeatherIcon = () => {
    switch (weatherCondition) {
      case 'Ensolarado':
        return <WiDaySunny size={24} style={{ color: '#73af4b' }} />;
      case 'Chuva':
        return <WiRain size={24} style={{ color: '#73af4b' }} />;
      case 'Nublado':
        return <WiCloud size={24} style={{ color: '#73af4b' }} />;
      case 'Neve':
        return <WiSnow size={24} style={{ color: '#73af4b' }} />;
      default:
        return null;
    }
  };

  return (
    <Card
      style={{ width: 150, borderRadius: 8, boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }}
      bodyStyle={{ padding: '12px' }}
    >
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <EnvironmentOutlined style={{ fontSize: '14px', marginRight: 4, color: '#73af4b' }} />
            <Text strong style={{ fontSize: '12px', lineHeight: 1, color: '#73af4b' }}>{location}</Text>
          </div>
        </Col>
        <Col span={24}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {renderWeatherIcon()} {/* Renderiza o ícone do tempo */}
            <Title level={5} style={{ margin: 0, fontSize: '20px', lineHeight: 1.2, color: '#73af4b' }}>{temperature}</Title>
          </div>
        </Col>
        <Col span={24}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ fontSize: '12px', lineHeight: 1, color: '#73af4b' }}>{weatherCondition}</Text>
          </div>
        </Col>
        {/* Adicione informações adicionais sobre o tempo aqui */}
      </Row>
    </Card>
  );
};

export default WeatherWidget;
