import { ApolloServer } from 'apollo-server';

import { context } from './graphql/context';
import { typeDefs, resolvers } from './graphql';
import { PostsApi } from './graphql/post/datasources';
import { UsersApi } from './graphql/user/datasources';
const port = 4003;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi(),
    };
  },
});

server.listen(port).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
