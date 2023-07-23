import { Sequelize } from "sequelize";
import { dbName, dbUser, dbPassword, dbHost, dbDialect, dbPort } from './../constants.js';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort,
});

sequelize.sync({force: true});
