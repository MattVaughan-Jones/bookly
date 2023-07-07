import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { faker } from "@faker-js/faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
async function startApollo() {
    await server.start();
    server.applyMiddleware({ app });
}
startApollo();

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
//   db.author.bulkCreate(
//     times(3, () => ({
//       firstName: faker.person.firstName(),
//       lastName: faker.person.lastName()
//     }))
//   );
//   // populate post table with dummy data
//   db.post.bulkCreate(
//     times(3, () => ({
//       title: 'POST TITLE',
//       content: 'content block...',
//       authorId: random(1, 10)
//     }))
//   );

  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
});
