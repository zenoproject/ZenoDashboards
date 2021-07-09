import React, { Component } from 'react';
import FormBlock from '../../../../Components/FormBlock';
import { ButtonElement } from '../../../../Components/ButtonElement';
export default class ChangePassword extends Component {
  render() {
    return (
      <>
        <h2>Change Password</h2>
        <li>
          <FormBlock
            htmlForName='newPassword'
            className='login-input'
            elementType='password'
            placeholder='New Password'
            onPressEnter={this.props.handleSubmit}
            onChange={(e) =>
              this.props.inputChange({
                name: 'newPassword',
                value: e.target.value,
              })
            }
          />
        </li>
        <li>
          <FormBlock
            htmlForName='confirmNewPassword'
            className='login-input'
            onPressEnter={this.props.handleSubmit}
            elementType='password'
            placeholder='Confirm New Password'
            onChange={(e) =>
              this.props.inputChange({
                name: 'confirmNewPassword',
                value: e.target.value,
              })
            }
          />
        </li>
        <li>
          <ButtonElement className='login-btn' onClick={this.props.handleSubmit} children='Change Password' />
        </li>
      </>
    );
  }
}
