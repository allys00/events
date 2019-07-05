import Axios from "axios";

export const urlBase = 'https://frontend-test.agendaedu.com/api/';

export const urls = {
  LOGIN: `${urlBase}/login`,
}

const baseHeaders = { 'content-type': 'application/json' }

export const Get = (url, headers) => {
  return Axios.get(url, { headers })
    .then(data => data.data)
    .catch(error => {
      throw error
    });
};

export const Post = (url, data, headers) => {
  return Axios.post(url, data, { ...baseHeaders, ...headers })
    .then(data => data.data)
    .catch(error => {
      throw error
    });
};
