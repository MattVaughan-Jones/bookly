import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.HOST;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: host,
  dialect: dialect,
  port: port,
});
