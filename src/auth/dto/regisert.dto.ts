import {IsEmail, IsNotEmpty} from "class-validator";

export class RegisertDto {
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    password_confirm: string;
}
