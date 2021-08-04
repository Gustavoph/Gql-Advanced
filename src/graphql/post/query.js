import { gql } from 'apollo-server';

export const postTypes = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    user: User!
    indexRef: Int!
    createdAt: String!
  }

  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFilters): [Post!]!
  }
`;
