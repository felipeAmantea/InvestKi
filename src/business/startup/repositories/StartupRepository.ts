import { injectable } from "inversify";
import { Startup } from '../models/Startup';

@injectable()
export class StartupRepository{

    public async findAll(): Promise<Startup[]> {
        return await Startup.findAll();
    }

    public async update(id: number, startup: Startup): Promise<any> {
        return await Startup.update({ startup }, { where: { id: id } });
    }

    public async findByNumber(number: string): Promise<Startup> {
        return await Startup.findOne({ include: [Startup], where: { number: number } });
    }

    public async save(startup: Startup): Promise<Startup> {
        return await Startup.create(startup);
    }
}