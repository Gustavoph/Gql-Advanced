import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3004/';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      console.log(`GET /users${path}`);
      return fetch(`${BASE_URL}users${path}`);
    },
    getPosts: (path = '/') => {
      console.log(`GET /posts${path}`);
      return fetch(`${BASE_URL}posts${path}`);
    },
  };
};
