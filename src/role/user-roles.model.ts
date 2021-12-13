import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Department} from "../departments/departments.model";
import sequelize from "sequelize";
import {type} from "os";
import {User} from "../users/users.model";
import {Role} from "./role.model";



@Table({tableName:'User_roles',createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{


    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @ForeignKey(()=>Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    UserId: number;

}