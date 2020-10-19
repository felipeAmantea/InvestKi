import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { UserService } from '../business/user/services/UserService';
import { User } from "business/user/models/User";


@injectable()
export class UserController {

    @inject(TYPES.UserService)
    private readonly userService: UserService;

    public register(app: Application): void {
        app.route('/user/:id')
            .put((req: Request, res: Response) => {
                this.userService.update(req.params.id, req.body as User)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/user')
            .get((req: Request, res: Response) => {
                this.userService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/user/number/:number')
            .get((req: Request, res: Response) => {
                this.userService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/user')
            .post((req: Request, res: Response) => {
                this.userService.save(req.body as User)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}