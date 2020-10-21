import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'Account' })
export class Account extends Model<Account> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    agency: number;

    @Column
    account: number;

    @Column
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