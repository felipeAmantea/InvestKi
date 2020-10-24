import { injectable } from "inversify";
import { User } from '../models/User';

@injectable()
export class UserRepository {

    public async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    public async update(id: number, user: User): Promise<any> {
        return await User.update({ user }, { where: { id: id } });
    }

    public async findByNumber(number: string): Promise<User> {
        return await User.findOne({ include: [User], where: { number: number } });
    }

    public async save(user: User): Promise<User> {
        return await User.create(user);
    }
}