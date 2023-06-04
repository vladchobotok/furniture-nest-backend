import {IsNumber, IsString} from "class-validator";

export class CreateProductDto{

    @IsString({message: 'Value should be a string'})
    readonly name: string
    @IsNumber({},{message: 'Value should be a number'})
    readonly price: number
    @IsString({message: 'Value should be a string'})
    readonly title: string
    @IsString({message: 'Value should be a string'})
    readonly description: string
    @IsNumber({},{message: 'Value should be a number'})
    readonly inStock: number
    @IsString({message: 'Value should be a string'})
    readonly images: string[]
    @IsNumber({},{message: 'Value should be a number'})
    readonly typeId: number
    @IsNumber({},{message: 'Value should be a number'})
    readonly brandId: number
}
