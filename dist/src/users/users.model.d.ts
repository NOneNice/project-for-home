import { Model } from "sequelize-typescript";
import { Department } from "../departments/departments.model";
import { Role } from "../role/role.model";
interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
    departmentId: number;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    email: string;
    password: string;
    departmentId: number;
    Workers: Department;
    roles: Role[];
}
export {};
