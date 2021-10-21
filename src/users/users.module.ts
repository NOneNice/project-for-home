import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Department} from "../departments/departments.model";
import {DepartmentsModule} from "../departments/departments.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User,Department]),
      DepartmentsModule

  ]
})
export class UsersModule {}
