import {IsString} from "class-validator";

export class CreateRoleDto{
    @IsString({message: 'Value should be a string'})
    readonly value: string;
}