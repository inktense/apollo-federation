import { ApolloServer } from 'apollo-server'
import { buildSubgraphSchema } from "@apollo/subgraph"
import { gql } from 'apollo-server'
import { readFileSync } from 'fs'

import { characterResolver as resolvers } from './resolver'

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }))

const server = new ApolloServer({ 
  schema: buildSubgraphSchema([{ typeDefs, resolvers }])
});

  server.listen({port: 4002}).then(({ url }) => {
    console.log(`🚀  Character subgraph ready at ${url}`)
  })
