export interface DatabaseConfig {
  mongodb_uri: string;
}

export const databaseConfig = () => ({
  mongodb_uri: process.env.MONGOD_DB_URI,
});
