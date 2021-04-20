import axios from 'axios';
import config from '../config';

// this file serves as common network calling module and should be ideally used all over the projet.

const http = axios.create({
  baseURL: config.REACT_APP_BACKEND_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
});

const getAll = (url: string) => http.get(url);

const get = (url: string) => http.get(url);

const create = (url: string, data: object) => http.post(url, data);

const update = (url: string, data: object) => http.put(url, data);

const patch = (url: string) => http.patch(url);

const remove = (url: string) => http.delete(url);

const api = {
  getAll,
  get,
  patch,
  create,
  update,
  remove,
};

export default api;
