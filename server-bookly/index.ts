import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { faker } from "@faker-js/faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema.ts";
import resolvers from "./resolvers.ts";
import { sequelize } from "./database/index.ts";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
});

const app = express();
async function startApollo() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
}
startApollo();

app.use(express.static("app/public"));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  sequelize.authenticate()
});
