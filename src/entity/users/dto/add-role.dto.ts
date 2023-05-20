import {IsNumber, IsString} from "class-validator";

export class AddRoleDto{
    @IsString({message: 'Value should be a string'})
    readonly value: string;
    @IsNumber({} ,{message: 'Value should be a number'})
    readonly userId: number;
}