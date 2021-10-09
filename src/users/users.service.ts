import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private UserRepository: typeof User) { }

    async createUser(dto: CreateUserDto){
        return await this.UserRepository.create(dto);
    }

    async getAllUsers(){
        return await this.UserRepository.findAll();
    }
    async remove(userId : number) {
        return await this.UserRepository.destroy({
            where : {id : userId},
            cascade : true,
            force : true
        });
    }
}
