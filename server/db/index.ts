import knex from 'knex';
import config from '../knexfile.js';

const knexConfig = config[process.env.NODE_ENV || 'development'];

export const db = knex(knexConfig);
