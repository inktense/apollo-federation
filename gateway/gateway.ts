import { APIGatewayProxyHandler, Context, Callback } from "aws-lambda";
import { ApolloServer } from "apollo-server-lambda";
import { ApolloGateway } from "@apollo/gateway";

require("dotenv").config();

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  context: ({ event, context, express }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  }),
});

exports.graphqlHandler = server.createHandler();
