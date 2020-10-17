import { injectable } from "inversify";
import { Person } from '../models/Person';

@injectable()
export class PersonRepository {

    public async save(person: Person): Promise<Person> {
        return await Person.create(Person);
    }
}