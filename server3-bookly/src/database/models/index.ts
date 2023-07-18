import { Sequelize, Dialect } from "sequelize";

export const sequelize = new Sequelize('bookly', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});
