/* eslint-disable */
import {
  INPUT_FORM_CHANGE,
  LOGIN_SUCCESS,
  VALIDATION_ERRORS,
  VALIDATION_ERRORS_SIGN_UP,
  LOGIN_STARTED,
  LOGIN_FAILED,
  SIGN_UP_FORM_CHANGE,
  SIGN_UP_FAILED,
  SIGN_UP_STARTED,
  SIGN_UP_SUCCESS,
  SIGNUP_RESET,
} from '../../Redux.constants';
import * as yup from 'yup';
import { Notifications } from '../../../Components/Notifications';
import {
  GetLocalStorage,
  setAccessToken,
  setUserId,
  setLocalStorageItem,
  setRefreshToken,
} from '../../../utils/localStorageOperations';
import { ApiBase } from '../../../utils/apiBase';
import * as CONSTANTS from './LoginPageActions.Constants';
import * as CONFIG from '../../../Config/constants';
import { ROUTES } from '../../../Routes.constants';
import { fetchValidationErrors } from '../../../utils/ValidationUtils';

const LOGIN_FORM_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Pleasse Enter a valid email address.')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum')
    .required('Password is required'),
});
const CHANGE_PASSWORD_SCHEMA = yup.object().shape({
  username: yup
    .string()
    .email('Pleasse Enter a valid email address.')
    .required('Email is required'),
  newPassword: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum')
    .required('Password is required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .required('Confirm Password is required'),
});

export function inputFormChange(params) {
  return (dispatch) => {
    dispatch({
      type: INPUT_FORM_CHANGE,
      payload: params,
    });
  };
}

export function login(input, callback) {
  return async (dispatch) => {
    try {
      await LOGIN_FORM_SCHEMA.validate(input);
      dispatch({
        type: LOGIN_STARTED,
        payload: {},
      });
      const apiBase = new ApiBase().instance;
      apiBase
        .post(CONFIG.LOGIN_ROUTE, {
          email: input.email,
          password: input.password,
        })
        .then((response) => {
          let newPasswordRequired = false;
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {},
            input,
          });
          if (
            response.data.data.challengeName === CONSTANTS.NEW_PASSWORD_REQUIRED
          ) {
            newPasswordRequired = true;
            setLocalStorageItem({
              name: 'session',
              value: response.data.data.session,
            });
          }
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
          setUserId(response.data.data.userData);
          callback({ newPasswordRequired, email: input.email });
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_FAILED,
            payload: {},
          });
          Notifications({
            type: 'error',
            notificationTitle: 'Login Failed',
            notificationMessage: 'Please check credentials and try again.',
          });
        });
    } catch (error) {
      let loginValidationErrors = await fetchValidationErrors(
        input,
        LOGIN_FORM_SCHEMA
      );
      dispatch({
        type: VALIDATION_ERRORS,
        payload: loginValidationErrors,
      });
      Notifications({
        type: 'error',
        notificationTitle: 'Invalid Credentials',
        notificationMessage: loginValidationErrors[0].message,
      });
    }
  };
}
export const changePassword = (input) => {
  return async (dispatch) => {
    try {
      await CHANGE_PASSWORD_SCHEMA.validate(input);
      dispatch({
        type: LOGIN_STARTED,
        payload: {},
      });
      const apiBase = new ApiBase().instance;
      apiBase
        .post(CONFIG.CHANGE_PASSWORD_ROUTE, {
          email: input.username,
          newPassword: input.newPassword,
          session: GetLocalStorage('session'),
        })
        .then((response) => {
          dispatch(
            login(
              {
                email: input.username,
                password: input.newPassword,
              },
              () => {
                window.location.href = ROUTES.HOME;
              }
            )
          );
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_FAILED,
            payload: {},
          });
          Notifications({
            type: 'error',
            notificationTitle: 'Change Password Failed',
            notificationMessage: 'Please check the passwords and try again.',
          });
        });
    } catch (error) {
      let loginValidationErrors = await fetchValidationErrors(
        input.CHANGE_PASSWORD_SCHEMA
      );
      dispatch({
        type: VALIDATION_ERRORS,
        payload: loginValidationErrors,
      });
      Notifications({
        type: 'error',
        notificationTitle: 'Invalid Credentials',
        notificationMessage: loginValidationErrors[0].message,
      });
    }
  };
};

export function signUpFormChange(params) {
  return (dispatch) => {
    dispatch({
      type: SIGN_UP_FORM_CHANGE,
      payload: params,
    });
  };
}
export function resetSignUp() {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_RESET,
    });
  };
}
export function signUp(input, callback) {
  return async (dispatch) => {
    try {
      await CHANGE_PASSWORD_SCHEMA.validate(input);
      dispatch({
        type: SIGN_UP_STARTED,
        payload: {},
      });
      const apiBase = new ApiBase().instance;
      apiBase
        .post(CONFIG.USER_REGISTER, {
          email: input.username,
          password: input.newPassword,
        })
        .then((response) => {
          let newPasswordRequired = false;
          dispatch({
            type: SIGN_UP_SUCCESS,
            payload: {},
            input,
          });
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
          setUserId(response.data.data.userData);
          Notifications({
            type: 'success',
            notificationTitle: 'User Sign Up',
            notificationMessage:
              'User added successfully. Please login with Email and password',
          });
        })

        .catch((error) => {
          dispatch({
            type: SIGN_UP_FAILED,
            payload: {},
          });
          Notifications({
            type: 'error',
            notificationTitle: 'Login Failed',
            notificationMessage: 'User already exists',
          });
        });
    } catch (error) {
      let loginValidationErrors = await fetchValidationErrors(
        input,
        CHANGE_PASSWORD_SCHEMA
      );
      dispatch({
        type: VALIDATION_ERRORS_SIGN_UP,
        payload: loginValidationErrors,
      });
      Notifications({
        type: 'error',
        notificationTitle: 'Invalid Credentials',
        notificationMessage: loginValidationErrors[0].message,
      });
    }
  };
}
