import React, { useEffect, useState } from 'react';
import { getBookingData } from '../data/dataService';
import { BookingData } from '../types';
import DatePicker from './DatePicker';
import TimeSeriesChart from './TimeSeriesChart';
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<BookingData[]>([]);
  const [filteredData, setFilteredData] = useState<BookingData[]>([]);
  const [startDate, setStartDate] = useState<string>('2023-01-01');
  const [endDate, setEndDate] = useState<string>('2024-01-01');

  useEffect(() => {
    getBookingData().then(setData);
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => {
      const date = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredData(filtered);
  }, [startDate, endDate, data]);

  return (
    <div>
      <DatePicker startDate={startDate} endDate={endDate} onDateChange={(start, end) => { setStartDate(start); setEndDate(end); }} />
      <TimeSeriesChart data={filteredData} />
      <ColumnChart data={filteredData} />
      <SparklineChart data={filteredData} type="adults" />
      <SparklineChart data={filteredData} type="children" />
    </div>
  );
};

export default Dashboard;
