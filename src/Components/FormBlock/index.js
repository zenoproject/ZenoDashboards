/* eslint-disable */
import React, { Component } from 'react';
import PropType, { number } from 'prop-types';
import { TextInput } from '../TextInput';
import TextArea from '../TextArea';
import { SelectElement } from '../SelectElement';
import Datepicker from '../Datepicker';
import style from './style.module.scss';
import { PasswordInput } from '../PasswordInput';
export default class FormBlock extends Component {
  constructor(props) {
    super(props);
  }
  getFormElements = (props) => {
    switch (props.elementType) {
      case 'select':
        return this.getSelectElement(props);
      case 'textArea':
        return <TextArea {...props} />;
      case 'datepicker':
        return <Datepicker {...props} />;
      case 'password':
        return <PasswordInput placeHolder={props.placeholder} onChange={props.onChange} {...props} />;
      default:
        return (
          <TextInput
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            htmlType={props.htmlType}
            {...props}
          />
        );
    }
  };
  getSelectElement = (props) => {
    return (
      <SelectElement
        optionList={props.optionList}
        defaultValue={props.defaultValue}
        className={props.className}
        onChange={props.onChange}
        placeholder={props.placeholder}
        mode={props.mode}
        disableSearch={props.disableSearch}
        value={props.value}
        style={props.style}
      />
    );
  };
  render() {
    return (
      <div className={style.formBlock}>
        <div className={style.formBlock__elements}>
          {this.props.label && (
            <label className={style.formLabel} htmlFor={this.props.htmlForName}>
              {this.props.requiredIcon && (
                <span className={style.requiredStar} title='required'>
                  *
                </span>
              )}
              <span className={style.requiredName}>{this.props.label}</span>
            </label>
          )}
          {this.getFormElements(this.props)}
          {this.props.error?.length ? (
            <div className={style.formError}>
              <span>
                <svg viewBox='0 0 512.072 431.938'>
                  <path
                    data-name='Path 277'
                    d='M47.355,431.938c-36.753,0-59.417-40.275-40.58-71.67L205.967,28.288c22.644-37.754,77.54-37.681,100.139,0L505.3,360.268c18.832,31.39-3.821,71.67-40.581,71.67ZM233.407,44.748,34.216,376.728a15.347,15.347,0,0,0,13.14,23.21h417.36a15.348,15.348,0,0,0,13.141-23.21L278.667,44.748a26.424,26.424,0,0,0-45.26,0Zm-1.372,275.19a24,24,0,1,1,24,24A24,24,0,0,1,232.035,319.938Zm8-56v-112a16,16,0,1,1,32,0v112a16,16,0,0,1-32,0Z'
                    transform='translate(0 0)'
                  />
                </svg>
              </span>
              <span>{this.props.error}</span>
            </div>
          ) : (
            []
          )}
        </div>
        {this.props.hint?.length ? <div className={style.formBlock__hints}>Hint : {this.props.hint}</div> : []}
      </div>
    );
  }
}
FormBlock.Prototype = {
  className: PropType.string,
  type: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
};
