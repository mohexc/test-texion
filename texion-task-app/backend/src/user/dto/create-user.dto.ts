import { IsEnum, IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @Length(6, 15)
    @IsString()
    username: string;
    @IsNotEmpty()
    @Length(6, 15)
    password: string;


}