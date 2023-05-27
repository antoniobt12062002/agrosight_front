import React from 'react';
import PropTypes from 'prop-types';
import './weatherwidget.css';

const WeatherWidget = ({ temperature, description, icon }) => {
  return (
    <div className="weather-widget">
      <div className="weather-icon">
        <img src={icon} alt="Weather Icon" />
      </div>
      <div className="weather-info">
        <div className="temperature">{temperature}°C</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WeatherWidget;
