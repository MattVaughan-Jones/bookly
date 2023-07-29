import { Knex } from "knex";
import dotenv from 'dotenv';
dotenv.config();

interface KnexConfig {
  [key: string]: Knex.Config
}

const config: KnexConfig = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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