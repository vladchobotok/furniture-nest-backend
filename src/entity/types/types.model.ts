import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Product} from "../products/products.model";

interface TypeCreationI{
    typeName: string
}

@Table({tableName: 'types', timestamps: false})
export class Type extends Model<Type, TypeCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    typeName: string
    @HasMany(() => Product)
    products: Product[]
}
