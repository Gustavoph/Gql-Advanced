import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';
const port = 4003;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
