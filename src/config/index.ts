import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Account } from '../business/account/models/Account';
import { Person } from '../business/person/models/Person';
import { Startup } from '../business/startup/models/Startup';
import { Transaction } from '../business/transaction/models/Transaction';
import { User } from '../business/user/models/User';


export const sequelize = new Sequelize({
    operatorsAliases: Op,
    dialect: 'mysql',
    database: 'investki_db',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306
  });



sequelize.addModels([Account])
sequelize.addModels([Person])
sequelize.addModels([Startup])
sequelize.addModels([Transaction])
sequelize.addModels([User])


Account.belongsTo(Person)
Person.belongsTo(User)
Startup.belongsTo(Person)
Transaction.belongsTo(Startup)
Transaction.belongsTo(Account)


Startup.hasMany(Transaction)
Person.hasMany(Account)