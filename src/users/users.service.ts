import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {DepartmentsService} from "../departments/departments.service";
import {RoleService} from "../role/role.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {Repository} from "sequelize-typescript";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private UserRepository: typeof User,
                private departmentsService: DepartmentsService,
                private roleService: RoleService
    ) {}

    async createUser(options){
        const user = await this.UserRepository.create(options);
        const role = await this.roleService.getRoleByValue("ADMIN");
        await user.$set('roles',[role.id]);
        const kk = await this.departmentsService.getDepartmentByValue("Распределение")
        await user.$set('Workers',[kk.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        return await this.UserRepository.findAll({include: {all: true}});
    }

    async getUserbyEmail(email: string){
        const user = await this.UserRepository.findOne({where:{email},include:{all: true}})
        return user
    }
    async getUserbyId(id: number){
        const user = await this.UserRepository.findOne({where:{id},include:{all: true}})
        return user
    }

    async update(id:number, options){
        return await this.UserRepository.update(options,{where:{id}}).then(()=>{});

    };


    async addRole(dto: AddRoleDto){
            const user = await this.UserRepository.findByPk(dto.userId);
            const role = await this.roleService.getRoleByValue(dto.value);
            if (role && user){
                await user.$add('role',role.id);
                return dto;
            }
            throw new HttpException('Пользователь либо роль не найдино', HttpStatus.NOT_FOUND )
    }


    async remove(userId : number) {
        return await this.UserRepository.destroy({
            where : {id : userId},
            force: true
        });
    }


}
