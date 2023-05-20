import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";

@Table({tableName: 'users_roles', timestamps: false})
export class UsersRoles extends Model <UsersRoles>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number
}