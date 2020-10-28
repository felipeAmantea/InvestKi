import { injectable } from "inversify";
import { Person } from '../models/Person';

@injectable()
export class PersonRepository {

    public async findAll(): Promise<Person[]> {
        return await Person.findAll();
    }

    public async update(id: number, person: Person): Promise<any> {
        return await Person.update({ person }, { where: { id: id } });
    }

    public async findByNumber(number: string): Promise<Person> {
        return await Person.findOne({ include: [Person], where: { number: number } });
    }

    public async save(person: Person): Promise<Person> {
        return await Person.create(person);
    }
}