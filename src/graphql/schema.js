import { gql } from 'apollo-server-core';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypesDefs } from './user/typeDefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypesDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
