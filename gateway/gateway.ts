import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

const gateway = new ApolloGateway({
    serviceList: [
      { name: "species", url: "http://localhost:4001" },
      { name: "characters", url: "http://localhost:4002" }
    ]
  });
  
  const server = new ApolloServer({
    gateway,
  });

  server.listen({port: 4000}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
