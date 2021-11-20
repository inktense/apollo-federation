import { ApolloServer } from 'apollo-server';

import resolvers from './src/graphql/resolvers/test';
import typeDefs from './src/graphql/schema/test';

const server = new ApolloServer({ resolvers, typeDefs });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
