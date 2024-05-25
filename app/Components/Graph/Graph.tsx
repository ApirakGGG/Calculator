// Components/Graph/Graph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GraphProps {
  data: {
    years: number[];
    amounts: number[];
  };
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  const chartData = {
    labels: data.years,
    datasets: [
      {
        label: 'ผลตอบแทนสะสม',
        data: data.amounts,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Graph;
