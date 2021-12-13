import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Department} from "../departments/departments.model";
import sequelize from "sequelize";
import {type} from "os";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    Description: string;
}

@Table({tableName:'Roles'})
export class Role extends Model<Role, RoleCreationAttrs>{

    @ApiProperty({description: 'Уникальный id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @ApiProperty({description:'Роль' })
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    value: string;

    @ApiProperty({description:'Описание' })
    @Column({type: DataType.STRING, allowNull: false})
    Description: string;


    @BelongsToMany(()=> User, ()=> UserRoles)
    users: User[];
}