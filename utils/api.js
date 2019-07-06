import Axios from "axios";

export const urlBase = 'https://frontend-test.agendaedu.com/api';

export const urls = {
  LOGIN: `${urlBase}/login`,
  GET_EVENTS: `${urlBase}/events`,
}

const baseHeaders = { 'Content-type': 'application/json' }

export const Get = (url, header) => {
  const headers = { ...baseHeaders, ...header }
  return Axios.get(url, { headers })
    .then(data => data.data)
    .catch(error => {
      throw error
    });
};

export const Post = (url, data, header) => {
  const headers = { ...baseHeaders, ...header }
  return Axios.post(url, data, { headers })
    .then(data => data.data)
    .catch(error => {
      throw error
    });
};
