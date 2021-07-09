import React from 'react';
import { Select } from 'antd';
export const SelectElement = (props) => {
  const { Option } = Select;

  function onBlur() {}
  function onFocus() {}
  function onSearch(val) {}
  return (
    <Select
      showSearch={!props.disableSearch}
      style={props.style}
      mode={props.mode}
      placeholder={props.placeholder || 'Select Option'}
      optionFilterProp='children'
      onChange={props.onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      defaultValue={props.defaultValue}
      value={props.value}
      className={`${props.className || ''} ${
        !props.isValid ? ' error-field' : ''
      }`}
      filterOption={(input, option) => {
        return option.children[0].props.children
          .toLowerCase()
          .includes(input.toLowerCase());
      }}
    >
      {(props.optionList || []).map((item, index) => {
        return (
          <Option key={index} value={item.value || item}>
            <span>{item.label || item}</span>
            {item.count && <span className='filter-count'>{item.count}</span>}
          </Option>
        );
      })}
    </Select>
  );
};
