import qs from 'qs';

export const parseWebUrl = (search = window.location.search) => {
  search = search.substr(1);
  return qs.parse(search);
};

export const makeWebUrl = (json) => {
  return '?' + qs.stringify(json);
};
