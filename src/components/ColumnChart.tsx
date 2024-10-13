import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { BookingData } from '../types';

interface ColumnChartProps {
  data: BookingData[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const countryData = data.reduce((acc: { [key: string]: number }, item) => {
    acc[item.country] = (acc[item.country] || 0) + (item.adults + item.children + item.babies);
    return acc;
  }, {});

  const chartData = {
    series: [{
      name: 'Visitors',
      data: Object.values(countryData)
    }],
    options: {
      chart: { type: 'bar' },
      xaxis: {
        categories: Object.keys(countryData)
      }
    }
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />;
};

export default ColumnChart;
