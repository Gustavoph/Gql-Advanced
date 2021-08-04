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

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }

  type PostNotFoundId implements PostError {
    statusCode: Int!
    message: String!
    info: String!
  }

  union PostResult = Post | PostNotFoundError | PostNotFoundId

  interface PostError {
    statusCode: Int!
    message: String!
  }

  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFilters): [Post!]!
  }
`;
