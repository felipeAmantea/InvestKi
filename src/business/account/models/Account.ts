import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'User' })
export class Account extends Model<Account> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.NUMBER())
    agency: number;

    @Column(DataType.NUMBER())
    account: number;

    @Column(DataType.NUMBER())
    digit: number;
       

    // @ForeignKey(() => Person)
    // @Column
    PersonId: number;

    static validate(account: Account): string {
        if (account.agency == null)
            return "Agência inválida."

        if (account.account == null)
            return 'Conta inválida';
            
        if (account.digit == null)
        return 'Dígito inválido';

        return null;
    }
}