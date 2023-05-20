import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {CartsProducts} from "../carts-products/carts-products.model";
import {Product} from "../products/products.model";

interface CartCreationI{
    userId: number
}

@Table({tableName: 'carts', timestamps: false})
export class Cart extends Model <Cart, CartCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    userId: number

    @BelongsToMany(() => Product, () => CartsProducts)
    products: Product[];

    @BelongsTo(() => User)
    user: User
}