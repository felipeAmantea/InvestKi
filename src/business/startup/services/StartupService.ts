import { injectable, inject } from "inversify";
import { start } from "repl";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Startup } from '../models/Startup';
import { StartupRepository } from '../repositories/StartupRepository';


@injectable()
export class StartupService {

    public async findAll(): Promise<ApiReturn> {
        var response = await this.startupRepository.findAll();

        return getResultOrError(response);
    }

    public async update(id: number, startup: Startup): Promise<ApiReturn> {
        var error = Startup.validate(startup);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.startupRepository.update(id, startup);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Conta inválida');

        var response = await this.startupRepository.findByNumber(number);

        return getResultOrError(response);
    }

    @inject(TYPES.StartupRepository)
    private readonly startupRepository: StartupRepository;

    public async save(startup: Startup): Promise<ApiReturn> {
        var error = Startup.validate(startup);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.startupRepository.save(startup);

        return getResultOrError(response);
    }
}