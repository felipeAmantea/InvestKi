import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'User' })
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(30))
    login: string;

    @Column(DataType.STRING(30))
    password: string;
       

    // @ForeignKey(() => Person)
    // @Column
    

    static validate(user: User): string {
        if (user.login == null)
            return " login inválido."

        // if (user.PersonId == null)
        //     return 'Pessoa inválida';

        return null;
    }
}