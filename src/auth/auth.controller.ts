import {
    BadRequestException,
    Body,
    Controller,
    Get,
    NotFoundException,
    Post,
    Put,
    Req,
    Res,
    UseGuards
} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt';
import {Request, Response} from "express";
import {RegisertDto} from "./dto/regisert.dto";
import {JwtService} from "@nestjs/jwt";
import {AuthGuard} from "./auth.guard";
import {Roles} from "./role-auth.decorator";


@ApiTags('Авторизация')
@Controller()
export class AuthController {

    constructor(private authService: AuthService,
                private UserService: UsersService,
                private JwtService: JwtService) { }




    @Post('admin/registration')
    async registration(@Body() body: RegisertDto){
        const {password_confirm, ...data} = body

        if(body.password !== body.password_confirm){
            throw new BadRequestException('Пароли не совпадают')
        }

        const hashed = await bcrypt.hash(body.password,12);


        return this.UserService.createUser({
            ...data,
            password: hashed,
        });
    }

    @Post('admin/login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ){
        const user = await this.UserService.getUserbyEmail(email);

        if(!user){
            throw new NotFoundException('Юзер не найден')
        }
        if (!await bcrypt.compare(password, user.password)){
            throw new BadRequestException('Пароль не верный')
        }

        const jwt = await this.JwtService.signAsync({
            id: user.id,
            Workers: user.Workers,
            role: user.roles
        });

        response.cookie('jwt',jwt,{httpOnly: true});

        return {
            message: 'Успешно'
        };
    }
    //@UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(AuthGuard)
    @Get('admin/user')
    async user(@Req() request: Request){
        const cookie = request.cookies['jwt'];
        const {id} = await this.JwtService.verifyAsync(cookie);
        return await this.UserService.getUserbyId(id);
    }

    @UseGuards(AuthGuard)
    @Roles('ADMIN')
    @Get('admin/user/all')
    async Getuser(@Req() request: Request){
        const cookie = request.cookies['jwt'];
        const {id} = await this.JwtService.verifyAsync(cookie);
        return await this.UserService.getUserbyId(id);
    }
    @UseGuards(AuthGuard)
    @Post('admin/logout')
    async logout( @Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return {message: 'Успешно'}
    }

    @UseGuards(AuthGuard)
    @Put('admin/users/info')
    async Updateinfo(
        @Req() request: Request,
        @Body('name') name: string,
        @Body('email') email: string,
    ){
        const cookie = request.cookies['jwt'];

        const {id} = await this.JwtService.verifyAsync(cookie);

        await this.UserService.update(id,{
            name,
            email
        })
        return this.UserService.getUserbyId(id)
    }
    @UseGuards(AuthGuard)
    @Put('admin/users/password')
    async UpdatePassword(
        @Req() request: Request,
        @Body('password') password: string,
        @Body('password_confirm') password_confirm: string,
    ){
        if(password !== password_confirm){
            throw new BadRequestException('Пароли не совпадают')
        }
        const cookie = request.cookies['jwt'];

        const {id} = await this.JwtService.verifyAsync(cookie);

        await this.UserService.update(id,{
          password: await bcrypt.hash(password,12)
        });
        return this.UserService.getUserbyId(id)
    }

}
