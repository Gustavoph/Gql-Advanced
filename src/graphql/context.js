import fetch from 'node-fetch';
import { makePostDataLoader } from './post/dataloaders';
import { getPosts } from './post/utils';
import { makeuserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

export const context = () => {
  return {
    userDataLoader: makeuserDataLoader(getUsers(fetch)),
    postDataLoader: makePostDataLoader(getPosts(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
