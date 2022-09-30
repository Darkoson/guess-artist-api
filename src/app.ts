import express from "express";
import { AppDataSource, seedData } from "./db/data-source";
import appRoutes from "./routing";
import cors from "cors";
import config from "./config";



const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(appRoutes);

app.listen({ port: config.app.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.app.port}`);
});

AppDataSource.initialize()
  .then(() => seedData())
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((error) => console.log(error));
