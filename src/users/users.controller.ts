import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Department} from "../departments/departments.model";


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {    }

    @ApiOperation({summary:'Создать пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    creat(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }
    @ApiOperation({summary:'Вывести пользователей'})
    @ApiResponse({status:200, type:[User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    @Delete(':id')
    remove(@Param('id') id : number)
    {
        return this.usersService.remove(id);
    }

}
