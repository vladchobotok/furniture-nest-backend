import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @IsString({message: 'Value should be a string'})
    readonly name: string;
    @IsString({message: 'Value should be a string'})
    readonly surname: string;
    @IsEmail({},{message: 'Incorrect email'})
    @IsString({message: 'Value should be a string'})
    readonly email: string;
    @IsString({message: 'Value should be a string'})
    @Length(4, 16, {message: 'Should be more than 3 symbols and less than 17'})
    readonly password: string;
}