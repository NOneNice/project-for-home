"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const departments_model_1 = require("./departments.model");
let DepartmentsService = class DepartmentsService {
    constructor(DepartmenRepository) {
        this.DepartmenRepository = DepartmenRepository;
    }
    async creatDepartmen(dto) {
        const departmen = await this.DepartmenRepository.create(dto);
        return departmen;
    }
    async getAllDepartments() {
        const department = await this.DepartmenRepository.findAll({ include: { all: true } });
        return department;
    }
    async getDepartmentByValue(name) {
        const dep = await this.DepartmenRepository.findOne({ where: { name } });
        return dep;
    }
    async remove(DepId) {
        return await this.DepartmenRepository.destroy({
            where: { id: DepId },
            force: true
        });
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(departments_model_1.Department)),
    __metadata("design:paramtypes", [Object])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map