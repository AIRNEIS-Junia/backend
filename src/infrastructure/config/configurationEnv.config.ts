import process from 'process';

export const configurationEnvConfig = async () => ({
  NODE_ENV: process.env.NODE_ENV,
  QRCODE_SECRET: process.env.DATABASE_URL,
  JWT_AT_SECRET: process.env.JWT_AT_SECRET,
});
