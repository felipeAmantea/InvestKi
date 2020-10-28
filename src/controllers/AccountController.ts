import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { AccountService } from '../business/account/services/AccountService';
import { Account } from "business/account/models/Account";


@injectable()
export class AccountController {

    @inject(TYPES.AccountService)
    private readonly accountService: AccountService;

    public register(app: Application): void {
        app.route('/account/:id')
            .put((req: Request, res: Response) => {
                this.accountService.update(req.params.id, req.body as Account)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/account')
            .get((req: Request, res: Response) => {
                this.accountService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/account/number/:number')
            .get((req: Request, res: Response) => {
                this.accountService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/account')
            .post((req: Request, res: Response) => {
                this.accountService.save(req.body as Account)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}