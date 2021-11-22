import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from "@apollo/subgraph"

import { typeDefs } from './schema'
import { characterResolver as resolvers } from './resolver'


const server = new ApolloServer({ 
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

  server.listen({port: 4002}).then(({ url }) => {
    console.log(`🚀  Character subgraph ready at ${url}`)
  })
