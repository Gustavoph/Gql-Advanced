import fetch from 'node-fetch';
import { makeUserDataLoader } from './post/dataloader';
import { getUsers } from './post/utils';

const BASE_URL = 'http://localhost:3004/';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(),
    getUsers: getUsers(fetch),
    getPosts: (path = '/') => {
      console.log(`GET /posts${path}`);
      return fetch(`${BASE_URL}posts${path}`);
    },
  };
};
