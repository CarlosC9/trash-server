import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, Unique } from 'sequelize-typescript';

@Table({
    tableName: 'user',
    timestamps: false,
})
export default class UserModel extends Model<UserModel> {
 
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        field: 'id_user'
    })
    id_user: number;

    @AllowNull(false)
    @Unique
    @Column({
        type: DataType.STRING,
        field: 'email'
    })
    email : string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        field: 'password'
    })
    password : string;
}