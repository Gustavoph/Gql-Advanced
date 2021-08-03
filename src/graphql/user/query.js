import { gql } from 'apollo-server';

export const userTypes = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    #posts: [Post!]!
  }

  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }
`;
