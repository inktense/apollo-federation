import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

require('dotenv').config()

const gateway = new ApolloGateway();
  
  const server = new ApolloServer({
    gateway,
  });

  server.listen({port: 4000}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
