import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { DepartmentsModule } from './departments/departments.module';
import {Department} from "./departments/departments.model";
import { RoleModule } from './role/role.module';
import {Role} from "./role/role.model";
import {UserRoles} from "./role/user-roles.model";
import { AuthModule } from './auth/auth.module';



@Module({
    controllers:[],
    providers: [],
    imports:[
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User,Department,Role,UserRoles],
        autoLoadModels: true
        }),
        UsersModule,
        DepartmentsModule,
        RoleModule,
        AuthModule,
    ]
})
export class AppModule { }