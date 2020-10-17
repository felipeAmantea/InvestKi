import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Person } from '../models/Person';
import { PersonRepository } from '../repositories/PersonRepository';


@injectable()
export class AccountService {

    @inject(TYPES.PersonRepository)
    private readonly personRepository: PersonRepository;

    public async save(person: Person): Promise<ApiReturn> {
        var error = Person.validate(person);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.personRepository.save(person);

        return getResultOrError(response);
    }
}