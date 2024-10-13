import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { BookingData } from '../types';

interface SparklineChartProps {
  data: BookingData[];
  type: 'adults' | 'children';
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
  const totalVisitors = data.reduce((acc, item) => acc + item[type], 0);

  const chartData = {
    series: [{
      name: `${type} Visitors`,
      data: data.map(item => item[type])
    }],
    options: {
      chart: { type: 'line', sparkline: { enabled: true } }
    }
  };

  return (
    <div>
      <h3>Total {type} visitors: {totalVisitors}</h3>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={100} />
    </div>
  );
};

export default SparklineChart;
