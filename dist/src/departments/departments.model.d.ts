import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface DepartmentCreationAttrs {
    name: string;
}
export declare class Department extends Model<Department, DepartmentCreationAttrs> {
    id: number;
    name: string;
    Depart: User;
}
export {};
