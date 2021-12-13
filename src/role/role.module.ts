import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "./role.model";
import {UserRoles} from "./user-roles.model";

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [
      SequelizeModule.forFeature([Role, User, UserRoles])
  ],
    exports:[
        RoleService
    ]
})
export class RoleModule {}
