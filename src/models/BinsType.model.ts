import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, HasMany } from 'sequelize-typescript';
import BinsModel from './Bins.model';

@Table({
    tableName: 'bintype',
    timestamps: false,
})
export default class BinsTypeModel extends Model<BinsTypeModel> {
 
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        field: 'id_type'
    })
    id_type : number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        field: 'name'
    })
    name : string;

    @HasMany( () => BinsModel )
    bins: BinsModel[];
}