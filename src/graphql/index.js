import { gql } from 'apollo-server-core';
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

export const typeDefs = [rootTypes, userTypes, postTypes];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
