import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { BsGear } from 'react-icons/bs';
import { GiPlantRoots } from 'react-icons/gi';
import WeatherWidget from './WeatherWidget'; // Importe o componente WeatherWidget aqui
import '../components/sidebar.css';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ background: '#73af4b', height: '100vh', width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
      <div style={{ padding: '26px', textAlign: 'left' }}>
        <WeatherWidget /> {/* Adicione o componente WeatherWidget aqui */}
      </div>
        <Menu theme="light" mode="inline" style={{ background: '#73af4b', marginTop: '16px' }}>
          <Menu.Item
            key="dashboard"
            icon={<HomeOutlined style={{ color: '#fff' }} />}
            onClick={() => handleItemClick('dashboard')}
            style={{
              background: selectedItem === 'dashboard' ? '#6ca547' : '',
              borderRadius: '0'
            }}
          >
            {selectedItem === 'dashboard' && <span className="selected-indicator" />}
            <span style={{ color: '#fff' }}>Dashboard</span>
          </Menu.Item>
          <Menu.Item
            key="analysis"
            icon={<GiPlantRoots style={{ color: '#fff' }} />}
            onClick={() => handleItemClick('analysis')}
            style={{
              background: selectedItem === 'analysis' ? '#6ca547' : '',
              borderRadius: '0'
            }}
          >
            {selectedItem === 'analysis' && <span className="selected-indicator" />}
            <span style={{ color: '#fff' }}>Análise de Solo</span>
          </Menu.Item>
          <Menu.Item
            key="settings"
            icon={<BsGear style={{ color: '#fff' }} />}
            onClick={() => handleItemClick('settings')}
            style={{
              background: selectedItem === 'settings' ? '#6ca547' : '',
              borderRadius: '0'
            }}
          >
            {selectedItem === 'settings' && <span className="selected-indicator" />}
            <span style={{ color: '#fff' }}>Configuração</span>
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ padding: '26px', textAlign: 'left' }}>
        <span style={{ color: '#fff', cursor: 'pointer' }}>Sair</span>
      </div>
    </div>
  );
};

export default Sidebar;