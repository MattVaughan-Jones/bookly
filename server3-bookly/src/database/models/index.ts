import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbDialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort,
});
