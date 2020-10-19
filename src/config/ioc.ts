import 'reflect-metadata';
import { Container } from 'inversify';

// TYPES
import { TYPES } from './types';

// CONTROLLERS
import { AccountController } from '../controllers/AccountController';
import { PersonController } from '../controllers/PersonController';
import { StartupController } from '../controllers/StartupController';
import { TransactionController } from '../controllers/TransactionController';
import { UserController } from '../controllers/UserController';

// SERVICES
import { AccountService } from '../business/account/services/AccountService';
import { PersonService } from '../business/person/services/PersonService';
import { StartupService } from '../business/startup/services/StartupService';
import { TransactionService } from '../business/transaction/services/TransactionService';
import { UserService } from '../business/user/services/UserService';




// REPOSITORIES
import { AccountRepository } from '../business/account/repositories/AccountRepository';
import { PersonRepository } from '../business/person/repositories/PersonRepository';
import { StartupRepository } from '../business/startup/repositories/StartupRepository';
import { TransactionRepository } from '../business/transaction/repositories/TransactionRepository';
import { UserRepository } from '../business/user/repositories/UserRepository';


const container = new Container();

// RESOLVER CONTROLLERS
container.bind<AccountController>(TYPES.AccountController).to(AccountController);
container.bind<PersonController>(TYPES.PersonController).to(PersonController);
container.bind<StartupController>(TYPES.StartupController).to(StartupController);
container.bind<TransactionController>(TYPES.TransactionController).to(TransactionController);
container.bind<UserController>(TYPES.UserController).to(UserController);

// RESOLVER SERVICES
container.bind<AccountService>(TYPES.AccountService).to(AccountService);
container.bind<PersonService>(TYPES.PersonService).to(PersonService);
container.bind<StartupService>(TYPES.StartupService).to(StartupService);
container.bind<TransactionService>(TYPES.TransactionService).to(TransactionService);
container.bind<UserService>(TYPES.UserService).to(UserService);


// RESOLVE REPOSITORIES
container.bind<AccountRepository>(TYPES.AccountRepository).to(AccountRepository);
container.bind<PersonRepository>(TYPES.PersonRepository).to(PersonRepository);
container.bind<StartupRepository>(TYPES.StartupRepository).to(StartupRepository);
container.bind<TransactionRepository>(TYPES.TransactionRepository).to(TransactionRepository);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

export default container;