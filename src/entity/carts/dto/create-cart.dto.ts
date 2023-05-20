import {IsNumber} from "class-validator";

export class CreateCartDto{
    @IsNumber({},{message: 'Value should be a number'})
    readonly userId: number
}
