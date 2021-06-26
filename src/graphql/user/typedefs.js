import { gql } from 'apollo-server-core';

export const userTypesDefs = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    userName: String!
  }
`;
