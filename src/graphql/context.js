import fetch from 'node-fetch';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: (path = '/') => fetch(process.env.API_URL + '/posts' + path),
  };
};
