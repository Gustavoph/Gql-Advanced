import { gql } from 'apollo-server-core';
import { filtersTypes } from './api-filters/query';
import { filterResolvers } from './api-filters/resolvers';
import { postTypes } from './post/query';
import { postResolvers } from './post/resolvers';
import { userTypes } from './user/query';
import { userResolvers } from './user/resolvers';

const rootTypes = gql`
  type Query {
    _root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _root: () => true,
  },
};

export const typeDefs = [rootTypes, userTypes, postTypes, filtersTypes];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  filterResolvers,
];
