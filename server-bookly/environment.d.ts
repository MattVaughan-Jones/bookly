import { Dialect } from 'sequelize';

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL: string;
        PORT: number;
        DB_HOST: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        DB_PORT: number;
        DB_DIALECT: Dialect;
      }
    }
  }
  
  export {};
