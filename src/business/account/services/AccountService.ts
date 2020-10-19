import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Account } from '../models/Account';
import { AccountRepository } from '../repositories/AccountRepository';


@injectable()
export class AccountService {

    @inject(TYPES.AccountRepository)
    private readonly accountRepository: AccountRepository;

    public async findAll(): Promise<ApiReturn> {
        var response = await this.accountRepository.findAll();

        return getResultOrError(response);
    }

    public async update(id: number, account: Account): Promise<ApiReturn> {
        var error = Account.validate(account);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.accountRepository.update(id, account);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Conta inválida');

        var response = await this.accountRepository.findByNumber(number);

        return getResultOrError(response);
    }

    public async save(account: Account): Promise<ApiReturn> {
        var error = Account.validate(account);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.accountRepository.save(account);

        return getResultOrError(response);
    }
}