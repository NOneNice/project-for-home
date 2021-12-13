import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Department} from "../departments/departments.model";
import sequelize from "sequelize";
import {type} from "os";
import {Role} from "../role/role.model";
import {UserRoles} from "../role/user-roles.model";
import {Exclude} from "class-transformer";

interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
    departmentId: number;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({description: 'Уникальный id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @ApiProperty({description:'Введите имя' })
    @Column({type: DataType.STRING,allowNull: false})
    name: string;

    @Column({type: DataType.STRING,unique: true ,allowNull: false})
    email: string;

   // @Exclude()
    @Column({type: DataType.STRING,allowNull: false})
    password: string;

    @ForeignKey(()=> Department)
    @Column({type: DataType.INTEGER,onDelete: 'CASCADE'})
    departmentId: number;



    @BelongsTo(()=> Department)
    Workers:Department;

   @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[];

}
