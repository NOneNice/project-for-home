import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description:'Введите имя' })
    readonly name: string;
    @ApiProperty({description:'В каком отделе находится сотрудник:'})
    readonly departmentId: number;
}
