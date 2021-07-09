import React from 'react';
import {DatePicker} from 'antd';
const defaultDateFormat = 'MMMM D, YYYY';
export default function Datepicker(props) {
  const minDate = props.minDate || new Date();
  return (
    <DatePicker
      format={props.dateFormat || defaultDateFormat}
      placeholder={props.placeholder}
      disabledDate={(d) =>
        !d || d.isBefore(minDate) || (props.maxDate && d.isAfter(props.maxDate))
      }
      onChange={props.onChange}
      className={`${props.className || ''}`}
      value={props.value}
    />
  );
}
