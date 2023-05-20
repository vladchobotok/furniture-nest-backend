import {BelongsToMany, Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UsersRoles} from "../users-roles/users-roles.model";
import {Cart} from "../carts/carts.model";

interface UserCreationI{
    name: string
    surname: string
    email: string
    password: string
}

@Table({tableName: 'users', timestamps: false})

export class User extends Model <User, UserCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    surname: string

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @BelongsToMany(() => Role, () => UsersRoles)
    roles: Role[];

    @HasOne(() => Cart)
    cart: Cart
}