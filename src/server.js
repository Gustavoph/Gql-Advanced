import { ApolloServer, gql } from 'apollo-server';
const port = 4003;

const typeDefs = gql`
  type Query {
    user: User!
    users: [User]
  }

  type User {
    id: ID!
    userName: String!
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        id: '52-dsa1232-231',
        userName: 'Gustavo Oliveira',
      };
    },
    users: () => {
      return [
        {
          id: '1',
          userName: 'Gustavo Oliveira',
        },
        {
          id: '2',
          userName: 'Giovanna Alcini',
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
