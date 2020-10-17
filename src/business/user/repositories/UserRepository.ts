import { injectable } from "inversify";
import { User } from '../models/User';

@injectable()
export class UserRepository {

    public async save(user: User): Promise<User> {
        return await User.create(User);
    }
}