import { Injectable } from '@nestjs/common';
import {CreatDepartmenDto} from "./dto/creat-departmen.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Department} from "./departments.model";

@Injectable()
export class DepartmentsService {

    constructor(@InjectModel(Department) private DepartmenRepository: typeof Department,
    ) { }

    async creatDepartmen(dto: CreatDepartmenDto){
        const departmen = await this.DepartmenRepository.create(dto);
        return departmen;
    }

    async getAllDepartments(){
        const department = await this.DepartmenRepository.findAll({include: {all: true}});
        return department;
    }

    async getDepartmentByValue(name: string){
        const dep = await this.DepartmenRepository.findOne({where:{name}});
        return dep;
    }

    async remove(DepId : number) {
        return await this.DepartmenRepository.destroy({
            where : {id : DepId},
            force: true
        });
    }
}


