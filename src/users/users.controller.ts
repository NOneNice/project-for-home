import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Department} from "../departments/departments.model";
//import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {AuthGuard} from "../auth/auth.guard";


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
    @Roles("ADMIN")
    @UseGuards(AuthGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary:'Выдача ролей'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(AuthGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
            return this.usersService.addRole(dto)
    }

    @Delete(':id')
    remove(@Param('id') id : number)
    {
        return this.usersService.remove(id);
    }

}
