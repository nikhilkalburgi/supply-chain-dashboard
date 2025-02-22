import React from 'react';
import { Bar, Line, Pie, Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = ({ type, data, options }) => {
  return (
    <div style={{ width: '100%', height: '100%', minWidth: 600 }}>
      {type === 'bar' && <Bar data={data} options={options} />}
      {type === 'line' && <Line data={data} options={options} />}
      {type === 'pie' && <Pie data={data} options={options} />}
      {type === 'bubble' && <Bubble data={data} options={options} />}
    </div>
  );
};

export default ChartContainer;