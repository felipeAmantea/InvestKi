import { injectable } from "inversify";
import { Transaction } from '../models/Transaction';

@injectable()
export class TransactionRepository {

    public async save(transaction: Transaction): Promise<Transaction> {
        return await Transaction.create(Transaction);
    }
}