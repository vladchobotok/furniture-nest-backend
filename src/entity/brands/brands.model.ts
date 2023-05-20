import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Product} from "../products/products.model";

interface BrandCreationI{
    brandName: string
}

@Table({tableName: 'brands', timestamps: false})
export class Brand extends Model<Brand, BrandCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    brandName: string
    @HasMany(() => Product)
    products: Product[]
}
