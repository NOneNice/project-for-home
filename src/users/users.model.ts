import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Department} from "../departments/departments.model";

interface UserCreationAttrs {
    name: string;
    departmentId: number;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({description: 'Уникальный id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @ApiProperty({description:'Введите имя' })
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ForeignKey(()=> Department)
    @Column({type: DataType.INTEGER})
    departmentId: number


    @BelongsTo(()=> Department)
    Workers:Department;

}