const Sequelize = require("sequelize");
const Path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../Db/AppDB.db3'
  });



