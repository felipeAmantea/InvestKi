import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { Startup } from '../models/Startup';
import { StartupRepository } from '../repositories/StartupRepository';


@injectable()
export class StartupService {

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