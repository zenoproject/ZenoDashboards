/*eslint-disable*/
import React, { Component } from 'react';
import FormBlock from '../../../../Components/FormBlock';
import { ButtonElement } from '../../../../Components/ButtonElement';
export default class SignUpForm extends Component {
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
                name: 'signUpemail',
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
            placeholder='New Password'
            onPressEnter={this.props.handleSubmit}
            onChange={(e) =>
              this.props.inputChange({
                name: 'signUpNewPassword',
                value: e.target.value,
              })
            }
          />
        </li>
        <li>
          <FormBlock
            label='Confirm Password'
            requiredIcon={true}
            htmlForName='loginPassword'
            className='login-input'
            elementType='password'
            placeholder='Confirm Password'
            onPressEnter={this.props.handleSubmit}
            onChange={(e) =>
              this.props.inputChange({
                name: 'signUpConfirmPassword',
                value: e.target.value,
              })
            }
          />
        </li>
        <li>
          <ButtonElement
            className='login-btn'
            onClick={this.props.handleSubmit}
            children='Sign Up'
            loading={this.props.signUpApi.loading}
          />
        </li>
      </>
    );
  }
}
