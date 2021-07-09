import React, { Component } from 'react';
import FormBlock from '../../../../Components/FormBlock';
import { ButtonElement } from '../../../../Components/ButtonElement';
export default class LoginForm extends Component {
  render() {
    return (
      <>
        <li>
          <FormBlock
            label='Email'
            requiredIcon={true}
            htmlForName='loginEmail'
            htmlType='text'
            className='login-input'
            placeholder='Email address'
            onPressEnter={this.props.handleSubmit}
            onChange={(e) => {
              this.props.inputChange({
                name: 'email',
                value: e.target.value,
              });
            }}
          />
        </li>
        <li>
          <FormBlock
            label='Password'
            requiredIcon={true}
            htmlForName='loginPassword'
            className='login-input'
            elementType='password'
            placeholder='Password'
            onPressEnter={this.props.handleSubmit}
            onChange={(e) =>
              this.props.inputChange({
                name: 'password',
                value: e.target.value,
              })
            }
          />
        </li>
        <li>
          <ButtonElement
            className='login-btn'
            onClick={this.props.handleSubmit}
            children='Login'
            loading={this.props.loading}
          />
        </li>
      </>
    );
  }
}
