import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import models from 'kurama-api/src/app/models/index.js';

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => {
      model.init(this.connection);
    });
  }

  associate() {
    Object.values(models).forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
