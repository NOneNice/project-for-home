import { Model } from "sequelize-typescript";
import { Department } from "../departments/departments.model";
interface UserCreationAttrs {
    name: string;
    departmentId: number;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    departmentId: number;
    Workers: Department;
}
export {};
