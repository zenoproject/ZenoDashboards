import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

export const PasswordInput = (props) => {
  return (
    <Input.Password
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={props.value}
      type='password'
      name={props.name}
      autoFocus={props.autoFocus}
      key={props.key}
      onKeyDown={props.onKeyDown}
      onPressEnter={props.onPressEnter}
      onClick={props.onClick}
      id={props.id}
      max={props.max}
      min={props.min}
      onBlur={props.onBlur}
      style={props.style}
      className={`${props.className || ''} ${
        !props.isValid ? ' error-field' : ''
      }`}
    />
  );
};
PasswordInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  value: PropTypes.any,
  htmlType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
};
