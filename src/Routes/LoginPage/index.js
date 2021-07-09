import { connect } from 'react-redux';
import { changePassword, inputFormChange, login, signUpFormChange, signUp, resetSignUp } from '../../Redux/Actions';
import LoginPage from './LoginPage';
import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    inputFormChange: (params) => {
      dispatch(inputFormChange(params));
    },
    signUpFormChange: (params) => {
      dispatch(signUpFormChange(params));
    },
    // eslint-disable-next-line max-params
    login: (input, callback) => {
      dispatch(login(input, callback));
    },
    changePassword: (input) => {
      dispatch(changePassword(input));
    },
    signUp: (input, callback) => {
      dispatch(signUp(input, callback));
    },
    resetSignUp: () => {
      dispatch(resetSignUp());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
