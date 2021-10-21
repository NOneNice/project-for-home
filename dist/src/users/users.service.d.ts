import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { DepartmentsService } from "../departments/departments.service";
export declare class UsersService {
    private UserRepository;
    private departmentsService;
    constructor(UserRepository: typeof User, departmentsService: DepartmentsService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    remove(userId: number): Promise<number>;
}
