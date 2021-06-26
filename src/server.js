import { ApolloServer, gql } from 'apollo-server';
const port = 4003;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return `Hello World`;
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
