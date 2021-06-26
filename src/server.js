import { ApolloServer, gql } from 'apollo-server';
const port = 4003;

const typeDefs = gql`
  type Query {
    id: ID!
    name: String
    age: Int
    average: Float
    married: Boolean
    arrayString: [String]
  }
`;

const resolvers = {
  Query: {
    id: () => 'sbt-1q121',
    name: () => 'Gustavo Oliveira',
    age: () => '19',
    average: () => '50.55',
    married: () => false,
    arrayString: () => ['Gustavo', 'Oliveira'],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
