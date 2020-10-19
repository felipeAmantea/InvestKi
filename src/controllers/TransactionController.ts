import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { TransactionService } from '../business/transaction/services/TransactionService';
import { Transaction } from "business/transaction/models/Transaction";


@injectable()
export class TransactionController {

    @inject(TYPES.TransactionService)
    private readonly transactionService: TransactionService;

    public register(app: Application): void {
        app.route('/transaction/:id')
            .put((req: Request, res: Response) => {
                this.transactionService.update(req.params.id, req.body as Account)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/transaction')
            .get((req: Request, res: Response) => {
                this.transactionService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/transaction/number/:number')
            .get((req: Request, res: Response) => {
                this.transactionService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/transaction')
            .post((req: Request, res: Response) => {
                this.transactionService.save(req.body as Transaction)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}