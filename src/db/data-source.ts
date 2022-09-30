import { DataSource, DataSourceOptions } from "typeorm";
import config from "../config";
import { Service } from "../services";
import artists from "./artists.json";
//import "reflect-metadata";


export const AppDataSource = new DataSource(config.db as DataSourceOptions);

export const seedData = () => {
  Service.listArtists().then((list) => {
    if (list.length === 0) {
      Service.createBulkArtist(artists).then((artists) =>
        console.log("Newly inserted artists:", artists)
      );
    }
  });
};
