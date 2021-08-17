import { gql } from 'apollo-server-core';
import { filtersTypes } from './api-filters/query';
import { filterResolvers } from './api-filters/resolvers';
import { loginTypeDefs } from './login/query';
import { loginResolvers } from './login/resolvers';
import { postTypes } from './post/query';
import { postResolvers } from './post/resolvers';
import { userTypes } from './user/query';
import { userResolvers } from './user/resolvers';

const rootTypes = gql`
  type Query {
    _root: Boolean
  }
  type Mutation {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
  Mutation: {
    _root: () => true,
  },
};

export const typeDefs = [
  rootTypes,
  userTypes,
  postTypes,
  filtersTypes,
  loginTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  filterResolvers,
  loginResolvers,
];
