import { ApolloServer } from 'apollo-server';
import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway'
import { buildSubgraphSchema } from '@apollo/subgraph';

import { 
    CharactersService
} from './src/graphql/services'

const gateway = new ApolloGateway({
    serviceList: [ CharactersService ],
    // schema: buildSubgraphSchema([{ CharactersService }])
 //  buildService: service => new LocalGraphQLDataSource(buildSubgraphSchema([service])),
  })

const server = new ApolloServer({ gateway });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
