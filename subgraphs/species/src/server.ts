import { ApolloServer, gql } from "apollo-server-lambda";
import { buildSubgraphSchema } from "@apollo/federation";
import { readFileSync } from "fs";
// TODO: using import path resolves to undefined with Docker
const path = require("path");

import { speciesResolver as resolvers } from "./resolver";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "../schema.graphql"), {
    encoding: "utf-8",
  })
);

// const server = new ApolloServer({
//   schema: buildSubgraphSchema([{ typeDefs, resolvers }])
// });

//   server.listen({port: 4001}).then(({ url }) => {
//     console.log(`🚀  Species server ready at ${url}`)
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
