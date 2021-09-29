import { CreatDepartmenDto } from "./dto/creat-departmen.dto";
import { DepartmentsService } from "./departments.service";
import { Department } from "./departments.model";
export declare class DepartmentsController {
    private departmentsService;
    constructor(departmentsService: DepartmentsService);
    creat(dto: CreatDepartmenDto): Promise<Department>;
    getByName(name: string): Promise<Department[]>;
}
