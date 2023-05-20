import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UsersRoles} from "../users-roles/users-roles.model";

interface RolesCreationI{
    value: string
}

@Table({tableName: 'roles', timestamps: false})
export class Role extends Model <Role, RolesCreationI>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @BelongsToMany(() => User, () => UsersRoles)
    users: User[];
}