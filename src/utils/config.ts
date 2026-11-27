import dotenv from 'dotenv';

dotenv.config({
  path: './config/.env'
});

export const config = {
  environment: process.env.ENVIRONMENT,
  baseUrl: process.env.BASE_URL
};