import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Person } from '../models/Person';
import { PersonRepository } from '../repositories/PersonRepository';


@injectable()
export class PersonService {


    public async findAll(): Promise<ApiReturn> {
        var response = await this.personRepository.findAll();

        return getResultOrError(response);
    }

    public async update(id: number, person: Person): Promise<ApiReturn> {
        var error = Person.validate(person);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.personRepository.update(id, person);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Conta inválida');

        var response = await this.personRepository.findByNumber(number);

        return getResultOrError(response);
    }

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