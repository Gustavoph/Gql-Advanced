# Comandos

```
npm init -y
npm install apollo-server graphql

npx https://github.com/luizomf/eslint-prettier
```

# Scalar Types

```
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
```
