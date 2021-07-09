export function dummyRequest(fail, timer = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) return reject({ message: 'error' });
      return resolve({ data: {} });
    }, timer);
  });
}