import fetch from 'node-fetch';
require('dotenv').config();

export const context = () => {
  return {
    getUsers: (user = '/') => fetch(process.env.API_URL + 'users' + user),

    getPosts: (post = '/') => fetch(process.env.API_URL + 'posts' + post),
  };
};
