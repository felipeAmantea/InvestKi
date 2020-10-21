import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { User } from "../../user/models/User";



@Table({ timestamps: true, tableName: 'Person' })
export class Person extends Model<Person> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    cpf: string;

    @Column(DataType.STRING(30))
    name: string;

    @Column(DataType.STRING(30))
    country: string;
       

    // @ForeignKey(() => Person)
    // @Column
    UserId: number;

    static validate(person: Person): string {
        if (person.cpf == null)
            return " CPF inválido."

        if (person.name == null)
            return 'Nome inválido';
            
        if (person.country == null)
        return 'País inválido';

        return null;
    }
}