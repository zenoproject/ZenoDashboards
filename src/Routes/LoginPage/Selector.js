import { createSelector } from 'reselect';

function getLoginPageReducer(state) {
  return state.LoginPageReducer;
}
function mergeReducer(LoginPageReducer) {
  return {
    email: LoginPageReducer.email,
    password: LoginPageReducer.password,
    loading: LoginPageReducer.loading,
    dummyUsers: LoginPageReducer.dummyUsers,
    selectedUser: LoginPageReducer.selectedUser,
    newPassword: LoginPageReducer.newPassword,
    confirmNewPassword: LoginPageReducer.confirmNewPassword,
    signUpemail: LoginPageReducer.signUpemail,
    signUpNewPassword: LoginPageReducer.signUpNewPassword,
    signUpConfirmPassword: LoginPageReducer.signUpConfirmPassword,
    signUpApi: LoginPageReducer.signUpApi,
  };
}

export const SelectState = createSelector([getLoginPageReducer], mergeReducer);
