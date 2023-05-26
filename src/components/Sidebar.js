import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { BsGear } from 'react-icons/bs';
import { GiPlantRoots } from 'react-icons/gi';

import logo from '../assets/logo.png';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={{ background: '#fff', height: '100vh', width: '200px' }}>
      <div style={{ textAlign: 'center', padding: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', marginBottom: '16px' }}>
          <img src={logo} alt="Logo AgroSight" style={{ width: '20%', maxWidth: '100px', marginBottom: '8px' }} />
          <h3 style={{ color: '#73af4b', fontSize: '14px', margin: 0 }}>AgroSight</h3>
        </div>
      </div>
      <Menu theme="light" mode="inline">
        <Menu.Item
          key="dashboard"
          icon={<HomeOutlined />}
          onClick={() => handleItemClick('dashboard')}
          onMouseEnter={() => handleMouseEnter('dashboard')}
          onMouseLeave={handleMouseLeave}
          style={{
            color: hoveredItem === 'dashboard' || selectedItem === 'dashboard' ? '#73af4b' : '',
            background: selectedItem === 'dashboard' ? '#f0f0f0 ' : ''
          }}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="analysis"
          icon={<GiPlantRoots />}
          onClick={() => handleItemClick('analysis')}
          onMouseEnter={() => handleMouseEnter('analysis')}
          onMouseLeave={handleMouseLeave}
          style={{
            color: hoveredItem === 'analysis' || selectedItem === 'analysis' ? '#73af4b' : '',
            background: selectedItem === 'analysis' ? '#f0f0f0' : ''
          }}
        >
          Análise de Solo
        </Menu.Item>
        <Menu.Item
          key="settings"
          icon={<BsGear />}
          onClick={() => handleItemClick('settings')}
          onMouseEnter={() => handleMouseEnter('settings')}
          onMouseLeave={handleMouseLeave}
          style={{
            color: hoveredItem === 'settings' || selectedItem === 'settings' ? '#73af4b' : '',
            background: selectedItem === 'settings' ? '#fff' : ''
          }}
        >
          Configuração
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
