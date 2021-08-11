import { gql } from 'apollo-server';

export const userTypes = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
    dateSearch: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    userName: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String!
  }

  extend type Query {
    user(id: ID!): User!
    users(input: ApiFilters): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(userId: ID!, data: UpdateUserInput): User!
    deleteUser(userId: ID!): Boolean!
  }
`;
