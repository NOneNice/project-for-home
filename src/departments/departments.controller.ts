import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreatDepartmenDto} from "./dto/creat-departmen.dto";
import {DepartmentsService} from "./departments.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Department} from "./departments.model";

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
    @Delete(':id')
    remove(@Param('id') id : number)
    {
        return this.departmentsService.remove(id);
    }




}
