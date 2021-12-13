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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const departments_service_1 = require("../departments/departments.service");
const role_service_1 = require("../role/role.service");
let UsersService = class UsersService {
    constructor(UserRepository, departmentsService, roleService) {
        this.UserRepository = UserRepository;
        this.departmentsService = departmentsService;
        this.roleService = roleService;
    }
    async createUser(options) {
        const user = await this.UserRepository.create(options);
        const role = await this.roleService.getRoleByValue("ADMIN");
        await user.$set('roles', [role.id]);
        const kk = await this.departmentsService.getDepartmentByValue("Распределение");
        await user.$set('Workers', [kk.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        return await this.UserRepository.findAll({ include: { all: true } });
    }
    async getUserbyEmail(email) {
        const user = await this.UserRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async getUserbyId(id) {
        const user = await this.UserRepository.findOne({ where: { id }, include: { all: true } });
        return user;
    }
    async update(id, options) {
        return await this.UserRepository.update(options, { where: { id } }).then(() => { });
    }
    ;
    async addRole(dto) {
        const user = await this.UserRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь либо роль не найдино', common_1.HttpStatus.NOT_FOUND);
    }
    async remove(userId) {
        return await this.UserRepository.destroy({
            where: { id: userId },
            force: true
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, departments_service_1.DepartmentsService,
        role_service_1.RoleService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map