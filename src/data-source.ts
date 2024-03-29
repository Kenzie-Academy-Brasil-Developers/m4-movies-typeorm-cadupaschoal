import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "/entities/**.{ts,js}");
  const migrationsPath = path.join(__dirname, "/migrations/**.{ts,js}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const databaseUrl: string | undefined = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("Missing env var: 'DATABASE_URL'");
  }

  return {
    type: "postgres",
    url: databaseUrl,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
