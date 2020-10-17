import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Account } from '../models/Account';
import { AccountRepository } from '../repositories/AccountRepository';


@injectable()
export class AccountService {

    @inject(TYPES.AccountRepository)
    private readonly accountRepository: AccountRepository;

    public async save(account: Account): Promise<ApiReturn> {
        var error = Account.validate(account);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.accountRepository.save(account);

        return getResultOrError(response);
    }
}