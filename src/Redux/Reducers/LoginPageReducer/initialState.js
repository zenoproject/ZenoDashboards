export const INITIAL_STATE = {
  email: {
    name: 'email',
    value: '',
    errorMessage: '',
  },
  password: {
    name: 'password',
    value: '',
    errorMessage: '',
  },
  signUpApi: { loading: false, error: false, success: false },
  loading: false,
  selectedUser: {},
  dummyUsers: [
    {
      firstName: 'James',
      lastName: 'Gordon',
      email: 'james@filedrop.com',
      password: 'Qwerty123',
    },
  ],
};
