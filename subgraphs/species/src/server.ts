import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from "@apollo/subgraph"

import { typeDefs } from './schema'
import { speciesResolver as resolvers } from './resolver'


const server = new ApolloServer({ 
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

  server.listen({port: 4001}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
