import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private UserRepository: typeof User) {
    }

    async createUser(dto: CreateUserDto){
        const user = await this.UserRepository.create(dto);
        return user;
    }

    async getAllUsers(){
        const users = await this.UserRepository.findAll();
        return users;
    }
}
