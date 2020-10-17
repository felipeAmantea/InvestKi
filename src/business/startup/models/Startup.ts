import { start } from "repl";
import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'Startup' })
export class Startup extends Model<Startup> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.NUMBER())
    cnpj: number;

    @Column(DataType.STRING(30))
    fantasyName: string;

    @Column(DataType.STRING(30))
    corporateName: string;

    @Column(DataType.STRING(30))
    country: string;

    @Column(DataType.STRING(30))
    zipcode: string;

    @Column(DataType.NUMBER())
    valuationAtual: number;

    @Column(DataType.STRING(30))
    description: string;

    @Column(DataType.STRING(30))
    segmento: string;

    // @ForeignKey(() => Person)
    // @Column
    PersonId: number;

    static validate(startup: Startup): string {
        if (startup.cnpj == null)
            return "CNPJ inválido."

        if (startup.fantasyName == null)
            return 'Razão Social inválida';
            
        if (startup.corporateName == null)
        return 'Nome Corporativo inválido';
        
        if (startup.description == null)
        return 'Descrição inválida';

        if (startup.segmento == null)
        return 'Segmento inválido';

        return null;
    }
}