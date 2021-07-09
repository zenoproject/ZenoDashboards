const ERROR = 'Error';
const EMPTY = '';
const UNAUTHORIZED_ERROR = 'Unauthorized';
const FORBIDDEN = 'Forbidden';
const INTERNAL_SERVER_ERROR = 'Internal Server Error';
const NOT_FOUND = 'Resource not found';
const BAD_REQUEST = 'Bad request';
const WENT_WRONG = 'Opps.! Something went wrong';

export const generateErrorMessage = (errors, name) => {
  let errorMessage = EMPTY;
  let errorName = name + ERROR;
  if (errors === undefined) {
    errorMessage = EMPTY;
  } else if (errors[name]) {
    errorMessage = errors[name].message;
  }
  return { errorMessage, errorName };
};

export const generateFormErrorObject = (errorMessages) => {
  let errorMessageObject = {};
  if (errorMessages !== undefined)
    Object.entries(errorMessages).map(
      (field) => (errorMessageObject[field[0]] = field[1].message ? field[1].message : EMPTY)
    );
  return errorMessageObject;
};

export const getApiErrorMessage = (error) => {
  let errorMessage;
  if (error.response && error.response.status) errorMessage = getErrorMessageForStatus(error.response.status);
  else errorMessage = getErrMessageFormResponse(error);
  return errorMessage;
};

function getErrMessageFormResponse(error) {
  if (!error) return '';
  let message = error.message;
  if (error.response && error.response.data && error.response.data.detail) message = error.response.data.detail;
  if (error.response && error.response.data && error.response.data.error && error.response.data.error.token)
    message = error.response.data.error.token[0];
  return message;
}

const getErrorMessageForStatus = (status) => {
  switch (status) {
    case 401:
      return UNAUTHORIZED_ERROR;
    case 403:
      return FORBIDDEN;
    case 500:
      return INTERNAL_SERVER_ERROR;
    case 404:
      return NOT_FOUND;
    case 400:
      return BAD_REQUEST;
    default:
      return WENT_WRONG;
  }
};

export async function validateForm(schema, object) {
  let isValid = await isValidForm(schema, object);
  if (isValid) return { isValid: true };
  return {
    errors: sanitiseError(await validationPathErrors(schema, object)),
    isValid: false,
  };
}
function sanitiseError(array) {
  const errors = {};
  array[0].forEach((element) => {
    let isObjectInfo = typeof element === 'object' ? true : false;
    let field = isObjectInfo ? element.path : element;
    errors[field] = {
      field,
      message: element.message,
    };
  });
  return errors;
}
function isValidForm(schema, body) {
  return schema.isValid(body, { abortEarly: false }).then(function (valid) {
    return valid;
  });
}
function validationPathErrors(schema, body) {
  return schema
    .validate(body, { abortEarly: false })
    .then(function (valid) {
      return true;
    })
    .catch((err) => {
      let fields = [];
      err.inner.forEach((element) => {
        fields.push(element);
      });
      return [fields]; // fields repeats when having multiple valiadtion added
    });
}
