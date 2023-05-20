import {IsString} from "class-validator";

export class CreateBrandDto{
    @IsString({message: 'Value should be a string'})
    readonly brandName: string
}