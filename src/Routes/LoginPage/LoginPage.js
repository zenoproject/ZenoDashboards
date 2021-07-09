/*eslint-disable*/
import React, { Component } from 'react';
import LoginForm from './Children/LoginForm';
import SignUpForm from './Children/SignUpForm';
import ChangePassword from './Children/ChangePassword';
import { ROUTES } from '../../Routes.constants';
import { HEADINGS } from '../../constants';
import PropType from 'prop-types';
import style from './style.module.scss';
import { Route, Switch, withRouter } from 'react-router';
import { parseWebUrl } from '../../utils/qsUtils';
import { ButtonElement } from '../../Components/ButtonElement';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: true, signUp: false, welcomePage: false };
  }
  inputChange = (e) => {
    this.props.inputFormChange(e);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(
      {
        email: this.props.email.value,
        password: this.props.password.value,
      },
      // Change this to handle change password
      ({ newPasswordRequired, email }) => {
        newPasswordRequired
          ? this.props.history.push({
              pathname: ROUTES.CHANGE_PASSWORD,
              search: `?email=${email}`,
            })
          : this.props.history.push(ROUTES.HOME);
      },
      this.props.dummyUsers
    );
  };
  handleChangePassword = (e) => {
    e.preventDefault();
    this.props.changePassword({
      username: parseWebUrl().email,
      newPassword: this.props.newPassword.value,
      confirmNewPassword: this.props.confirmNewPassword.value,
    });
  };
  renderLoading = () => {
    return <div>Loading...</div>;
  };
  showSignUp = () => {
    this.setState({ showLogin: false, signUp: true });
  };
  showLogin = () => {
    this.setState({ showLogin: true, signUp: false });
  };

  showWelcome = () => {
    if (!this.props.signUpApi.error) {
      this.setState({ welcomePage: true, signUp: false, showLogin: false });
    }
  };

  signUpInputChange = (e) => {
    this.props.signUpFormChange(e);
  };

  componentDidUpdate = () => {
    if (this.props.signUpApi.success && this.state.signUp) {
      this.showWelcome();
      this.props.resetSignUp();
    }
  };
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signUp(
      {
        username: this.props?.signUpemail?.value,
        newPassword: this.props?.signUpNewPassword?.value,
        confirmNewPassword: this.props?.signUpConfirmPassword?.value,
      },
      // Change this to handle change password
      ({ newPasswordRequired, email }) => {
        newPasswordRequired
          ? this.props.history.push({
              pathname: ROUTES.CHANGE_PASSWORD,
              search: `?email=${email}`,
            })
          : this.props.history.push(ROUTES.HOME);
      }
    );
  };

  redirectToLogin = () => {
    this.props.history.push(ROUTES.HOME);
  };
  renderForm = () => {
    return (
      <div className={style.loginBlock}>
        <div className={style.loginBlock__content}>
          <div className={style.contentInner}>
            <div className={style.logiredirectToLoginnLogo}>
              <div className={style.loginWelcome}>
                <h2
                  onClick={
                    this.state.showLogin ? this.showSignUp : this.showLogin
                  }
                >
                  {this.state.showLogin
                    ? HEADINGS.SIGN_UP
                    : HEADINGS.LOGIN_HERE}
                </h2>
              </div>
            </div>
            <div className={style.loginWelcome}>
              <h1>Welcome</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet velit in lorem vestibulum vulputate non sed sapien.
                Nulla vitae ante quis lorem placerat congue ullamcorper ac
                turpis. Sed vel turpis ac est aliquet finibus egestas in turpis.
                Nullam sit amet efficitur turpis. Cras elementum viverra ex quis
                tempus. Pellentesque eros tortor,
              </p>
            </div>
            <div className={style.loginFooter}>
              <p>© 2021 </p>
              <ul className={style.loginFooter__list}>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms and conditions</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.loginBlock__forms}>
          <div className={style.formsElements}>
            <ul className={style.formsElements__list}>
              <Switch>
                <Route path={ROUTES.CHANGE_PASSWORD}>
                  <ChangePassword
                    {...this.props}
                    inputChange={this.inputChange}
                    handleSubmit={this.handleChangePassword}
                  />
                </Route>
                <Route path={ROUTES.LOGIN}>
                  {this.state.showLogin ? (
                    <LoginForm
                      {...this.props}
                      inputChange={this.inputChange}
                      handleSubmit={this.handleSubmit}
                    />
                  ) : (
                    <SignUpForm
                      {...this.props}
                      inputChange={this.signUpInputChange}
                      handleSubmit={this.handleSignUp}
                    />
                  )}
                </Route>
              </Switch>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  ////////////////////////////////////////////////////
  renderWelcomePage = () => {
    return (
      <div className={style.welcomewrapper}>
        <div className={style.welcomewrapper__forms}>
          <div className={''}>
            <ul className={''}>
              <h3>welcome</h3>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet velit in lorem vestibulum vulputate non sed sapien.
                Nulla vitae ante quis lorem placerat congue ullamcorper ac
                turpis. Sed vel turpis ac est aliquet finibus egestas in turpis.
                Nullam sit amet efficitur turpis. Cras elementum viverra ex quis
                tempus. Pellentesque eros tortor,
              </h2>
              <ButtonElement
                className='login-btn'
                onClick={this.redirectToLogin}
                children='Continue to dashboard'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  };
  ////////////////////////////////////////////

  renderPage = () => {
    return (
      <>
        {this.state.welcomePage ? this.renderWelcomePage() : this.renderForm()}
      </>
    );
  };
  render() {
    return (
      <section className={style.loginWrapper}>{this.renderPage()}</section>
    );
  }
}

export default withRouter(LoginPage);

LoginPage.PropType = {
  className: PropType.string,
  value: PropType.string,
  emailError: PropType.string,
  type: PropType.string,
};
