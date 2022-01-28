const { ApolloServer } = "apollo-server-express";
const { ApolloServerPluginDrainHttpServer } = "apollo-server-core";
const express = "express";
const http = "http";
const schema = require("../graphql/schema");

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    playground: !isProduction ? { endpoint: "/graphql" } : false,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
