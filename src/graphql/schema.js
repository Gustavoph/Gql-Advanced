import { gql } from 'apollo-server-core';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typeDefs';
import { apiFiltersTypeDefs } from './filters/typedefs';
import { apiFiltersResolvers } from './filters/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }
  type Mutation {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
