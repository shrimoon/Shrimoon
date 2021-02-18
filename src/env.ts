import * as dotenv from 'dotenv';

dotenv.config();

export const databaseSettings = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const serverSettings = {
  port: process.env.PORT || 4000,
};
