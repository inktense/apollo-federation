import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from "@apollo/subgraph"
import { gql } from 'apollo-server'
import { readFileSync } from 'fs'

import { speciesResolver as resolvers } from './resolver'

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }))


const server = new ApolloServer({ 
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

  server.listen({port: 4001}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
