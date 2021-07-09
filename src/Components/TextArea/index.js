import React from 'react';
import {Input} from 'antd';

const defaultHeight = 5;

const TextArea = (props) => {
  const {TextArea} = Input;
  const onChange = (eve) => {
    props.handleChange &&
      props.handleChange({
        value: eve.target.value,
        name: eve.target.name,
        index: props.index,
        formObject: props.formObject,
      });
  };
  return (
    <TextArea
      as='textarea'
      onBlur={props.onBlur}
      rows={props.rows || defaultHeight}
      onChange={onChange}
      disabled={props.disabled}
      placeholder={props.placeHolder}
      value={props.value}
      defaultValue={props.defaultValue}
      type={props.htmlType}
      name={props.name}
      onKeyUp={props.onKeyUp}
      className={`${props.className || 'textarea-item'} ${
        !props.isValid ? ' error-field' : ''
      }`}
    />
  );
};

export default TextArea;

TextArea.defaultProps = {
  onKeyUp: () => {},
};
