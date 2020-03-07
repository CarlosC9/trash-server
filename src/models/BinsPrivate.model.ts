import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import BinsTypeModel from './BinsType.model';
import UserModel from './User.model';

@Table({
    tableName: 'privatebin',
    timestamps: false,
})
export default class BinsPrivateModel extends Model<BinsPrivateModel> {
 
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        field: 'id_pivate_bin'
    })
    id_private_bin : number;

    @AllowNull(false)
    @Column({
        type: DataType.BOOLEAN,
        field: 'full'
    })
    full : boolean;

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

    @Column({
        type: DataType.STRING,
        field: 'description',
    })
    description?: string;
    
    @ForeignKey( () => UserModel )
    @Column({
        type:DataType.INTEGER,
        field: 'User_id',
    })
    userId: number;
    
    @BelongsTo( () => UserModel)
    users: UserModel[];
}