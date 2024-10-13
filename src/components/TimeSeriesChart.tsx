import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { BookingData } from '../types';

interface TimeSeriesChartProps {
  data: BookingData[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const chartData = {
    series: [{
      name: 'Visitors',
      data: data.map(item => ({
        x: `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`,
        y: item.adults + item.children + item.babies
      }))
    }],
    options: {
      chart: { type: 'line' },
      xaxis: { type: 'datetime' }
    }
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />;
};

export default TimeSeriesChart;
