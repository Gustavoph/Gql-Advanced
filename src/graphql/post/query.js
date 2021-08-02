import { gql } from 'apollo-server';

export const postTypes = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    #user: String!
    indexRef: Int!
    createdAt: String!
  }

  extend type Query {
    post: Post!
    posts: [Post!]!
  }
`;
