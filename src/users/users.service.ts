import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {DepartmentsService} from "../departments/departments.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private UserRepository: typeof User,
                private departmentsService: DepartmentsService) { }

    async createUser(dto: CreateUserDto){
        return await this.UserRepository.create(dto);
    }

    async getAllUsers(){
        return await this.UserRepository.findAll({include: {all: true}});
    }

    async remove(userId : number) {
        return await this.UserRepository.destroy({
            where : {id : userId}
        });
    }
}
