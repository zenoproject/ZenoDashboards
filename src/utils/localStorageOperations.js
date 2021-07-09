export const SetLocalStorage = (inputObject) => {
  for (let item in inputObject) localStorage.setItem(item, setItemValue(inputObject[item]));
};

export const setLocalStorageItem = (inputObject) => {
  localStorage.setItem(inputObject.name, inputObject.value);
};

export const GetLocalStorage = (key) => {
  return getItemValue(localStorage.getItem(key));
};

export const setAccessToken = (token) => {
  localStorage.setItem('idToken', token);
};

export const getAccessToken = () => {
  localStorage.getItem('idToken');
};

export const setUserId = (token) => {
  localStorage.setItem('userId', token);
};

export const setRefreshToken = (token) => {
  localStorage.setItem('refreshToken', token);
};

export const getRefreshToken = () => {
  localStorage.getItem('refreshToken');
};

function setItemValue(value) {
  if (typeof value != 'string') return JSON.stringify(value);
  else return value;
}
function getItemValue(item) {
  try {
    return JSON.parse(item);
  } catch (err) {
    return item;
  }
}

export const CheckInLocalStorage = (key) => {
  return localStorage.getItem(key) ? true : false;
};

export const ClearLocalStorage = () => {
  localStorage.clear();
};
