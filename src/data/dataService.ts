import csvtojson from 'csvtojson';
import { BookingData } from '../types';

export const getBookingData = async (): Promise<BookingData[]> => {
  const response = await fetch('/hotel_bookings_1000.csv');
  const csvData = await response.text();
  return await csvtojson().fromString(csvData);
};
