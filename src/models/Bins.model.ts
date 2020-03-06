import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import BinsTypeModel from './BinsType.model';

@Table({
    tableName: 'bins',
    timestamps: false,
})
export default class BinsModel extends Model<BinsModel> {
 
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        field: 'id_bins'
    })
    id_bins : number;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
        field: 'longitude'
    })
    longitude : number;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
        field: 'latitude'
    })
    latitude : number;

    @ForeignKey( () => BinsTypeModel )
    @Column({
        type: DataType.INTEGER,
        field: 'BinType_id_type'
    })
    binTypeId : number;

    @BelongsTo( () => BinsTypeModel )
    binsType: BinsTypeModel[]; 
    
}

