export function fetchValidationErrors(input, SCHEMA) {
  return new Promise((resolve, reject) => {
    SCHEMA.validate(input, { abortEarly: false }).catch((error) => {
      let validationList = error.inner.map((item) => {
        return {
          path: item.path,
          message: item.message,
        };
      });
      resolve(validationList);
    });
  });
}
