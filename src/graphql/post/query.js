import { gql } from 'apollo-server';

export const postTypes = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    user: User!
    indexRef: Int!
    createdAt: String!
  }

  input CreatePostInput {
    title: String!
    body: String!
    #userId: String!
  }

  input UpdatePostInput {
    title: String
    body: String
    #userId: String
  }

  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFilters): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    updatePost(postId: ID!, data: UpdatePostInput): Post!
    deletePost(postId: ID!): Boolean!
  }
`;
