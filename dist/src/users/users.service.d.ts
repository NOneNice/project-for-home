import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private UserRepository;
    constructor(UserRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    remove(userId: number): Promise<number>;
}
