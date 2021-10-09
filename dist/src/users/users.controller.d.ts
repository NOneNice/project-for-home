import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    creat(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    remove(id: number): Promise<number>;
}
