import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";


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
}