import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from "@apollo/subgraph"

import { typeDefs } from './schema'
import { characterResolver as resolvers } from './resolver'


const server = new ApolloServer({ 
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
