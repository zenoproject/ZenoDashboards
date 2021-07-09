import {
  LOGIN_SUCCESS,
  LOGIN_STARTED,
  LOGIN_FAILED,
  INPUT_FORM_CHANGE,
  VALIDATION_ERRORS,
  SIGN_UP_FORM_CHANGE,
  SIGN_UP_FAILED,
  SIGN_UP_STARTED,
  SIGN_UP_SUCCESS,
  SIGNUP_RESET,
  VALIDATION_ERRORS_SIGN_UP,
} from '../../Redux.constants';
import {
  inputFormChange,
  loginSuccess,
  validationErrors,
  loginStarted,
  loginFailed,
  signupFormChange,
  signUpSuccess,
  signUpStarted,
  signUpFailed,
  signUpReset,
  validationErrorsSignUp,
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function CounterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FORM_CHANGE:
      return inputFormChange(state, action.payload);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case LOGIN_STARTED:
      return loginStarted(state, action.payload);
    case LOGIN_FAILED:
      return loginFailed(state);
    case VALIDATION_ERRORS:
      return validationErrors(state, action.payload);
    case SIGN_UP_FORM_CHANGE:
      return signupFormChange(state, action.payload);
    case VALIDATION_ERRORS_SIGN_UP:
      return validationErrorsSignUp(state, action.payload);
    case SIGN_UP_SUCCESS:
      return signUpSuccess(state, action.payload);
    case SIGN_UP_STARTED:
      return signUpStarted(state, action.payload);
    case SIGN_UP_FAILED:
      return signUpFailed(state);
    case SIGNUP_RESET:
      return signUpReset(state);
    default:
      return { ...state };
  }
}
