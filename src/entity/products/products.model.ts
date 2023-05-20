import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {CartsProducts} from "../carts-products/carts-products.model";
import {Brand} from "../brands/brands.model";
import {Type} from "../types/types.model";
import {Cart} from "../carts/carts.model";

interface ProductCreationI{
    name: string
    price: number
    title: string
    description: string
    inStock: number
    images: string[]
    typeId: number
    brandId: number
}

@Table({tableName: 'products', timestamps: false})
export class Product extends Model <Product, ProductCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false})
    price: number

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @Column({type: DataType.INTEGER, allowNull: false})
    inStock: number

    @Column({type: DataType.ARRAY(DataType.STRING), allowNull: false})
    images: string[]

    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER, allowNull: false})
    typeId: number

    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER, allowNull: false})
    brandId: number

    @BelongsToMany(() => Product, () => CartsProducts)
    products: Product[];

    @BelongsTo(() => Brand)
    brand: Brand;

    @BelongsTo(() => Type)
    types: Type;

    @BelongsToMany(() => Cart, () => CartsProducts)
    carts: Cart[];
}