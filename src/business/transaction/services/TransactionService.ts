import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Transaction } from '../models/Transaction';
import { TransactionRepository } from '../repositories/TransactionRepository';


@injectable()
export class TransactionService {

    @inject(TYPES.TransactionRepository)
    private readonly transactionRepository: TransactionRepository;

    public async save(transaction: Transaction): Promise<ApiReturn> {
        var error = Transaction.validate(transaction);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.transactionRepository.save(transaction);

        return getResultOrError(response);
    }
}