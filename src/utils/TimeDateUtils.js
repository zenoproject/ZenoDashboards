import { format } from 'date-fns';

// For the format YYYYMMDD
export function spliceDate(date) {
  date = date.toString();
  return {
    year: parseInt(date.slice(0, 4)),
    month: parseInt(date.slice(4, 6)),
    date: parseInt(date.slice(6)),
  };
}
export function formatDate({ year, month, date }, dateFormat = 'dd/MM/yy') {
  return format(new Date(year, month, date), dateFormat);
}
