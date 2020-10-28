import { transcode } from "buffer";
import { injectable } from "inversify";
import { Transaction } from '../models/Transaction';

@injectable()
export class TransactionRepository {

    public async findAll(): Promise<Transaction[]> {
        return await Transaction.findAll();
    }

    public async update(id: number, transaction: Transaction): Promise<any> {
        return await Transaction.update({ transaction }, { where: { id: id } });
    }

    public async findByNumber(number: string): Promise<Transaction> {
        return await Transaction.findOne({ include: [Transaction], where: { number: number } });
    }

    public async save(transaction: Transaction): Promise<Transaction> {
        return await Transaction.create(transaction);
    }
}