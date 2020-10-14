import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";
import { Startup } from "../../startup/models/Startup";
import { Account } from "../../account/models/Account";


@Table({ timestamps: true, tableName: 'User' })
export class Transaction extends Model<Transaction> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.NUMBER())
    totalTransaction: number;

    // @ForeignKey(() => Person)
    // @Column
    PersonId: number;
    StartupId: number;
    AccountId: number;

    static validate(transaction: Transaction): string {
        if (transaction.totalTransaction == null)
            return "Transação inválida."

        return null;
    }
}