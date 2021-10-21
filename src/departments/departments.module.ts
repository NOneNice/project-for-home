import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Department} from "./departments.model";
import {User} from "../users/users.model";

@Module({
  providers: [DepartmentsService],
  controllers: [DepartmentsController],
  imports: [
      SequelizeModule.forFeature([Department,User])
  ],
    exports: [
        DepartmentsService
    ]
})
export class DepartmentsModule {}
