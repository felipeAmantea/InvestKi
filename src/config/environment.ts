import { Op } from 'sequelize';

export default {
  local: {
    operatorsAliases: Op,
    dialect: 'mysql',
    database: 'investki_db',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306
  }
}