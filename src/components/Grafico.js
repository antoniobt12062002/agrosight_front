import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Seg',
    nitrogenio: 10,
    fosforo: 15,
    potassio: 12,
    ph: 7,
    temperatura: 25,
    umidade: 60,
  },
  {
    name: 'Ter',
    nitrogenio: 12,
    fosforo: 18,
    potassio: 14,
    ph: 7.5,
    temperatura: 26,
    umidade: 58,
  },
  {
    name: 'Qua',
    nitrogenio: 9,
    fosforo: 16,
    potassio: 11,
    ph: 7.2,
    temperatura: 24,
    umidade: 55,
  },
  {
    name: 'Qui',
    nitrogenio: 11,
    fosforo: 14,
    potassio: 13,
    ph: 7.3,
    temperatura: 27,
    umidade: 62,
  },
  {
    name: 'Sex',
    nitrogenio: 13,
    fosforo: 17,
    potassio: 15,
    ph: 7.8,
    temperatura: 28,
    umidade: 59,
  },
  {
    name: 'Sáb',
    nitrogenio: 12.5,
    fosforo: 19,
    potassio: 13.5,
    ph: 7.4,
    temperatura: 25.5,
    umidade: 56,
  },
  {
    name: 'Dom',
    nitrogenio: 10.5,
    fosforo: 16.5,
    potassio: 11.5,
    ph: 7.1,
    temperatura: 26.5,
    umidade: 61,
  },
];

const Grafico = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="nitrogenio" stroke="#73af4b" name="Nitrogênio" />
        <Line type="monotone" dataKey="fosforo" stroke="#73af4b" name="Fósforo" />
        <Line type="monotone" dataKey="potassio" stroke="#73af4b" name="Potássio" />
        <Line type="monotone" dataKey="ph" stroke="#73af4b" name="pH" />
        <Line type="monotone" dataKey="temperatura" stroke="#73af4b" name="Temperatura" />
        <Line type="monotone" dataKey="umidade" stroke="#73af4b" name="Umidade" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Grafico;
