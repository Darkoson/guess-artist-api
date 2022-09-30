import dotenv from "dotenv";
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const config = {
  app: {
    port: Number(process.env.PORT),
  },
  db: {
    type: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_ACCOUNT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: process.env.PG_SYNCHRONIZE == "true",
    logging: process.env.PG_LOGGING == "true",
    entities: [process.env.PG_ENTITIES],
  },
};

export default config;
