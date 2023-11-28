import dotenv from 'dotenv';

dotenv.config();

export const dbHost: string = process.env.DB_HOST;
export const dbUser: string = process.env.DB_USER;
export const dbPassword: string = process.env.DB_PASSWORD;
export const dbName: string = process.env.DB_NAME;
export const dbPort: number = parseInt(process.env.DB_PORT);
export const dbDialect: string = process.env.DB_DIALECT;
