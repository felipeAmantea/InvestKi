import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';


@injectable()
export class UserService {

    @inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository;

    public async findAll(): Promise<ApiReturn> {
        var response = await this.userRepository.findAll();

        return getResultOrError(response);
    }

    public async update(id: any, user: User): Promise<ApiReturn> {
        var error = User.validate(user);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.userRepository.update(id, user);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Conta inválida');

        var response = await this.userRepository.findByNumber(number);

        return getResultOrError(response);
    }


    public async save(user: User): Promise<ApiReturn> {
        var error = User.validate(user);
        console.log(user);
        

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.userRepository.save(user);

        return getResultOrError(response);
    }
}