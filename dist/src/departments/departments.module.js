"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const departments_service_1 = require("./departments.service");
const departments_controller_1 = require("./departments.controller");
const sequelize_1 = require("@nestjs/sequelize");
const departments_model_1 = require("./departments.model");
const users_model_1 = require("../users/users.model");
let DepartmentsModule = class DepartmentsModule {
};
DepartmentsModule = __decorate([
    (0, common_1.Module)({
        providers: [departments_service_1.DepartmentsService],
        controllers: [departments_controller_1.DepartmentsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([departments_model_1.Department, users_model_1.User])
        ],
        exports: [
            departments_service_1.DepartmentsService
        ]
    })
], DepartmentsModule);
exports.DepartmentsModule = DepartmentsModule;
//# sourceMappingURL=departments.module.js.map