import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RoleService} from "./role.service";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Post()
    creat(@Body() dto: CreateRoleDto){
        return this.roleService.CreatRole(dto);
    }

    @Get()
    getAllRole(){
        return this.roleService.getAllUsers()
    }
    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value)
    }
}
