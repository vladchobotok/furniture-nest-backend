import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Cart} from "../carts/carts.model";
import {Product} from "../products/products.model";

@Table({tableName: 'carts_products', timestamps: false})
export class CartsProducts extends Model <CartsProducts>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Cart)
    @Column({type: DataType.INTEGER})
    cartId: number

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number
}