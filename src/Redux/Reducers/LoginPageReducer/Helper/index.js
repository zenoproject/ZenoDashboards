export function inputFormChange(state, payload) {
  return {
    ...state,
    [payload.name]: {
      ...state[payload.name],
      name: payload.name,
      value: payload.value,
      errorMessage: '',
    },
  };
}

export function loginSuccess(state, payload) {
  return {
    ...state,
    loading: false,
    selectedUser: payload.selectedUser,
  };
}
export function validationErrors(state, payload) {
  const newState = { ...state };
  newState.loading = false;
  for (let item of payload) {
    newState[item.path] = {
      ...newState[item.path],
      errorMessage: item.message,
    };
  }
  return {
    ...state,
    ...newState,
  };
}
export function loginStarted(state, payload) {
  return {
    ...state,
    loading: true,
  };
}

export function loginFailed(state, payload) {
  return {
    ...state,
    loading: false,
  };
}

export function signupFormChange(state, payload) {
  return {
    ...state,
    [payload.name]: {
      ...state[payload.name],
      name: payload.name,
      value: payload.value,
      errorMessage: '',
    },
  };
}

export function signUpSuccess(state, payload) {
  return {
    ...state,
    signUpApi: { loading: false, error: false, success: true },
  };
}
export function signUpStarted(state, payload) {
  return {
    ...state,
    signUpApi: { loading: true, error: false, success: false },
  };
}
export function signUpFailed(state, payload) {
  return {
    ...state,
    signUpApi: { loading: false, error: true, success: false },
  };
}

export function signUpReset(state, payload) {
  return {
    ...state,
    signUpApi: { loading: false, error: false, success: false },
  };
}

export function validationErrorsSignUp(state, payload) {
  return {
    ...state,
    signUpApi: { loading: false, error: true, success: false },
  };
}
