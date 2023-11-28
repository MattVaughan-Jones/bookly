import { Knex } from "knex";
import {  dbHost, dbUser, dbPassword, dbName, dbDialect } from './src/constants.js';

interface KnexConfig {
  [key: string]: Knex.Config
}

const config: KnexConfig = {
  development: {
    client: dbDialect,
    connection: {
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName,
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};

export default config;