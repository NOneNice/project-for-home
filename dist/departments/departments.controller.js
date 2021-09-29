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
exports.DepartmentsController = void 0;
const common_1 = require("@nestjs/common");
const creat_departmen_dto_1 = require("./dto/creat-departmen.dto");
const departments_service_1 = require("./departments.service");
const swagger_1 = require("@nestjs/swagger");
const departments_model_1 = require("./departments.model");
let DepartmentsController = class DepartmentsController {
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    creat(dto) {
        return this.departmentsService.creatDepartmen(dto);
    }
    getByName(name) {
        return this.departmentsService.getAllDepartments();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создать отдел' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: departments_model_1.Department }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creat_departmen_dto_1.CreatDepartmenDto]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "creat", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "getByName", null);
DepartmentsController = __decorate([
    (0, common_1.Controller)('departments'),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService])
], DepartmentsController);
exports.DepartmentsController = DepartmentsController;
//# sourceMappingURL=departments.controller.js.map