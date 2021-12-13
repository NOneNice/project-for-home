import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CreatDepartmenDto} from "./dto/creat-departmen.dto";
import {DepartmentsService} from "./departments.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Department} from "./departments.model";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@Controller('departments')
export class DepartmentsController {

    constructor(private departmentsService: DepartmentsService ) {    }

    @ApiOperation({summary: 'Создать отдел'})
    @ApiResponse({status:200, type: Department})
    @Post()
    creat(@Body() dto:CreatDepartmenDto){
        return this.departmentsService.creatDepartmen(dto)
    }
    @Get()
    getByName(name:string){
        return this.departmentsService.getAllDepartments();
    }
    @Get()
    getByNameDefault(@Param('name') name: string){
        return this.departmentsService.getDepartmentByValue(name)
    }

    @Delete(':id')
    remove(@Param('id') id : number)
    {
        return this.departmentsService.remove(id);
    }




}
