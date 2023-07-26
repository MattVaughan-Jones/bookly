import { dbHost, dbUser, dbPassword, dbName, dbPort, dbDialect } from './../constants';

export const knex = require('knex')({
    client: dbDialect,
    connection: {
      host : dbHost,
      port : dbPort,
      user : dbUser,
      password : dbPassword,
      database : dbName
    }
});
