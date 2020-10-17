import { injectable } from "inversify";
import { Account } from '../models/Account';

@injectable()
export class AccountRepository {

    public async save(account: Account): Promise<Account> {
        return await Account.create(Account);
    }
}