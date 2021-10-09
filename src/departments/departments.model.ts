import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface DepartmentCreationAttrs {
    name: string;
}

@Table({tableName:'Departments'})
export class Department extends Model<Department, DepartmentCreationAttrs>{

    @ApiProperty({description: 'Уникальный id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true,onDelete: 'CASCADE'})
    id:number;

    @ApiProperty({description:'Введите название отдела' })
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @HasMany(()=> User)
    Depart:User;
}