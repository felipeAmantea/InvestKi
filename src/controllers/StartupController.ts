import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { StartupService } from '../business/startup/services/StartupService';
import { Startup } from "business/startup/models/Startup";


@injectable()
export class StartupController {

    @inject(TYPES.StartupService)
    private readonly startupService: StartupService;

    public register(app: Application): void {
        app.route('/startup/:id')
            .put((req: Request, res: Response) => {
                this.startupService.update(req.params.id, req.body as Startup)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/startup')
            .get((req: Request, res: Response) => {
                this.startupService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/startup/number/:number')
            .get((req: Request, res: Response) => {
                this.startupService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/startup')
            .post((req: Request, res: Response) => {
                this.startupService.save(req.body as Startup)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}