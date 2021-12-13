import { User } from "./users.model";
import { DepartmentsService } from "../departments/departments.service";
import { RoleService } from "../role/role.service";
import { AddRoleDto } from "./dto/add-role.dto";
export declare class UsersService {
    private UserRepository;
    private departmentsService;
    private roleService;
    constructor(UserRepository: typeof User, departmentsService: DepartmentsService, roleService: RoleService);
    createUser(options: any): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserbyEmail(email: string): Promise<User>;
    getUserbyId(id: number): Promise<User>;
    update(id: number, options: any): Promise<void>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    remove(userId: number): Promise<number>;
}
