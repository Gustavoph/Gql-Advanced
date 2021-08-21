const { resolve } = require('path');
const dotenv = require('dotenv');
import knexFn from 'knex';
import knexfile from './knexfile';

dotenv.config({
  path: resolve(__dirname, '..', '..', '.env'),
});

export const knex = knexFn(knexfile[process.env.DEVELOP]);
