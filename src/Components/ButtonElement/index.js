import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
export const ButtonElement = (props) => {
  return (
    <Button
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
      variant={props.variant}
      htmlType={props.htmlType}
      children={props.children}
      loading={props.loading || false}
      type={props.type || null}
      className={`${props.className || ''}`}
    >
      {props.children}
    </Button>
  );
};
ButtonElement.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  type: PropTypes.string,
};
