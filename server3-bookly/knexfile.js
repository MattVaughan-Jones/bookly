// Update with your config settings.
import { dbHost, dbUser, dbPassword, dbName, dbDialect } from './dist/constants';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: dbDialect,
    connection: {
      host : dbHost,
      user : dbUser,
      password : dbPassword,
      database : dbName
    },
    migrations: {
      directory: "./src/database/migrations",
    }
  },

};
