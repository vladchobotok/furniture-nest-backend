import {IsArray, IsEnum, IsInt, IsNumber, IsOptional, IsString} from "class-validator";
import {Transform, Type} from "class-transformer";

export class ProductsFilterDto{

    @IsOptional()
    @IsString()
    @Type(() => String)
    type?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @Transform((params) => params.value.split(',').map(String))
    @Type(() => Array<string>)
    brands?: Array<string>;

    @IsOptional()
    @IsArray()
    @IsNumber({},{ each: true })
    @Transform((params) => params.value.split(',').map(Number))
    @Type(() => Array<number>)
    price?: Array<number>;
}