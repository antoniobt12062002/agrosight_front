import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { WiDaySunny, WiRain, WiCloud, WiSnow } from 'react-icons/wi';
import axios from 'axios';

const { Title, Text } = Typography;

const WeatherWidget = () => {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=-24.046&lon=-52.3838&appid=c8dda9e715f8d44ee66b010980fb863b&units=metric&lang=pt_br`
      );
      const { name, main, weather } = response.data;
      setLocation(name);
      setTemperature(main.temp);
      setWeatherCondition(weather[0].main);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch weather data initially
    fetchWeatherData();

    // Fetch weather data every hour
    const interval = setInterval(() => {
      fetchWeatherData();
    }, 3600000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const translateWeatherCondition = (condition) => {
    const translations = {
      Clear: 'Céu Limpo',
      Rain: 'Chuva',
      Drizzle: 'Chuviscos',
      Thunderstorm: 'Temporais',
      Clouds: 'Nublado',
      Snow: 'Neve',
    };

    return translations[condition] || condition;
  };

  const renderWeatherIcon = () => {
    switch (weatherCondition) {
      case 'Clear':
        return <WiDaySunny size={24} style={{ color: '#73af4b' }} />;
      case 'Rain':
      case 'Drizzle':
      case 'Thunderstorm':
        return <WiRain size={24} style={{ color: '#73af4b' }} />;
      case 'Clouds':
        return <WiCloud size={24} style={{ color: '#73af4b' }} />;
      case 'Snow':
        return <WiSnow size={24} style={{ color: '#73af4b' }} />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: 150, borderRadius: 8, boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} bodyStyle={{ padding: '12px' }}>
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
            <Title level={5} style={{ margin: 0, fontSize: '20px', lineHeight: 1.2, color: '#73af4b' }}>{temperature}°C</Title>
          </div>
        </Col>
        <Col span={24}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ fontSize: '12px', lineHeight: 1, color: '#73af4b' }}>{translateWeatherCondition(weatherCondition)}</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default WeatherWidget;
