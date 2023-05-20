import {IsString} from "class-validator";

export class CreateTypeDto{
    @IsString({message: 'Value should be a string'})
    readonly typeName : string
}