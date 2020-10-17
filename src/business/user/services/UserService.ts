import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';


@injectable()
export class UserService {

    @inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository;

    public async save(user: User): Promise<ApiReturn> {
        var error = User.validate(user);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.userRepository.save(user);

        return getResultOrError(response);
    }
}