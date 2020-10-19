import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Transaction } from '../models/Transaction';
import { TransactionRepository } from '../repositories/TransactionRepository';


@injectable()
export class TransactionService {

    public async findAll(): Promise<ApiReturn> {
        var response = await this.transactionRepository.findAll();

        return getResultOrError(response);
    }

    public async update(id: number, transaction: Transaction): Promise<ApiReturn> {
        var error = Transaction.validate(transaction);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.transactionRepository.update(id, transaction);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Conta inválida');

        var response = await this.transactionRepository.findByNumber(number);

        return getResultOrError(response);
    }

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