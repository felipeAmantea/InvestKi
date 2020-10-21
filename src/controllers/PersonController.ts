import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { PersonService } from '../business/person/services/PersonService';
import { Person } from "business/person/models/Person";


@injectable()
export class PersonController {

    @inject(TYPES.PersonService)   
    private readonly personService: PersonService;

    public register(app: Application): void {
        app.route('/person/:id')
            .put((req: Request, res: Response) => {
                this.personService.update(req.params.id, req.body as Person)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/person')
            .get((req: Request, res: Response) => {
                this.personService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/person/number/:number')
            .get((req: Request, res: Response) => {
                this.personService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/person')
            .post((req: Request, res: Response) => {
                this.personService.save(req.body as Person)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}