import { CreatDepartmenDto } from "./dto/creat-departmen.dto";
import { Department } from "./departments.model";
export declare class DepartmentsService {
    private DepartmenRepository;
    constructor(DepartmenRepository: typeof Department);
    creatDepartmen(dto: CreatDepartmenDto): Promise<Department>;
    getAllDepartments(): Promise<Department[]>;
    getDepartmentByValue(name: string): Promise<Department>;
    remove(DepId: number): Promise<number>;
}
