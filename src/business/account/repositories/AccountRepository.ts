import { injectable } from "inversify";
import { Account } from '../models/Account';
import { AccountService } from "../services/AccountService";

@injectable()
export class AccountRepository {

    public async findAll(): Promise<Account[]> {
        return await Account.findAll();
    }

    public async update(id: number, account: Account): Promise<any> {
        return await Account.update({ account }, { where: { id: id } });
    }

    public async findByNumber(number: string): Promise<Account> {
        return await Account.findOne({ include: [Account], where: { number: number } });
    }

    public async save(account: Account): Promise<Account> {
        return await Account.create(Account);
    }
}