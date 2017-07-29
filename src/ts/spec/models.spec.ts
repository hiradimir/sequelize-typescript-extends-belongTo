import * as assert from "power-assert"

import {Sequelize} from "sequelize-typescript";
import * as parseDbUrl from "parse-database-url";

const basePath = require('path').resolve('');

describe("util", () => {

  describe("model test", () => {
    it('sync', () => {

      let dbConfig = parseDbUrl(process.env["DATABASE_URL"]);

      const sequelize = new Sequelize({
        name: dbConfig.database,
        username: dbConfig.user,
        password: dbConfig.password,
        dialect: dbConfig.driver,
        host: dbConfig.host,
        port: dbConfig.port,
        modelPaths: [__dirname + '/../main/models']
      });

      return sequelize
        .sync({ force: true });
    });

  });
});