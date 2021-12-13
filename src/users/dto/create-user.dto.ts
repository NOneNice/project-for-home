import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @IsString({message: 'Имя должно быть в строке'})
    @ApiProperty({description:'Введите имя' })
    readonly name: string;

    @IsString({message: 'Должен быть строкой'})
    @IsEmail({},{message:'Некоректный email'})
    readonly email: string;
    @IsString({message:'Должен быть строкой'})
    @Length(4,16,{message:'Не меньше 4 и не больше 16'})
    readonly password: string;
    @ApiProperty({description:'В каком отделе находится сотрудник:'})
    readonly departmentId: number;
}
