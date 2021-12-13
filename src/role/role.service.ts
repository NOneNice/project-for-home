import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./role.model";

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async CreatRole(dto: CreateRoleDto){
        return await this.roleRepository.create(dto);
    };
    async getAllUsers(){
        return await this.roleRepository.findAll({include: {all: true}});
    };

    async getRoleByValue(value: string){
        return await this.roleRepository.findOne({where: {value}});
    }
}
