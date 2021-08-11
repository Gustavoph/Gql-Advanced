// Queries

import { AuthenticationError } from 'apollo-server';

const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources, loggedUserId }) => {
  if (!loggedUserId) {
    throw new AuthenticationError('You have to log in');
  }
  console.log(loggedUserId);
  const posts = dataSources.postApi.getPosts(input);
  return posts;
};

const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

// Mutations

const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};

const updatePost = async (_, { postId, data }, { dataSources }) => {
  return dataSources.postApi.updatePost(postId, data);
};

const deletePost = async (_, { postId }, { dataSources }) => {
  return dataSources.postApi.deletePost(postId);
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
  },
  Post: {
    user,
  },
};
