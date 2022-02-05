import { ApolloServer, gql } from "apollo-server-lambda";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { readFileSync } from "fs";
// TODO: using import path resolves to undefined with Docker
const path = require("path");

import { characterResolver as resolvers } from "./resolver";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "../schema.graphql"), {
    encoding: "utf-8",
  })
);

// const server = new ApolloServer({
//   schema: buildSubgraphSchema([{ typeDefs, resolvers }])
// });

//   server.listen({port: 4002}).then(({ url }) => {
//     console.log(`🚀  Character subgraph ready at ${url}`)
//   })

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  context: ({ event, context, express }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  }),
});

exports.graphqlHandler = server.createHandler();
