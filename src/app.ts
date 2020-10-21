// lib/app.ts
import * as express from "express";
import * as cors from "cors";
import container from "./config/ioc";
import { TYPES } from "./config/types";


import { PersonController } from "./controllers/PersonController";
import { AccountController } from "./controllers/AccountController";
import { StartupController } from "./controllers/StartupController";
import { UserController } from "./controllers/UserController";
import { TransactionController } from "./controllers/TransactionController";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(express.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }));
        // cors
        this.app.use(cors());

        container.get<AccountController>(TYPES.AccountController).register(this.app);
        container.get<PersonController>(TYPES.PersonController).register(this.app);
        container.get<StartupController>(TYPES.StartupController).register(this.app);
        container.get<TransactionController>(TYPES.TransactionController).register(this.app);
        container.get<UserController>(TYPES.UserController).register(this.app);
    }

}

export default new App().app;