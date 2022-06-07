import { IsNotEmpty } from "class-validator";


export class LoginUserDto {

    @IsNotEmpty()
    role : string;

    @IsNotEmpty()
    userName : string;

    @IsNotEmpty()
    password:string;

}