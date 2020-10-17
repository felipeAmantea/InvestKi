import { injectable } from "inversify";
import { Startup } from '../models/Startup';

@injectable()
export class StartupRepository{

    public async save(startup: Startup): Promise<Startup> {
        return await Startup.create(startup);
    }
}