import {Controller, Get, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {AdminService} from "../admin/admin.service";
import {ProductsPagesService} from "./products-pages.service";
import {ProductsFilterDto} from "./dto/products-filter.dto";

@Controller('')
export class ProductsPagesController {

    constructor(private productsPagesService: ProductsPagesService){}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    @Get(["/sofas", "/beds", "/chairs", "/chests", "/wardrobes", "/kitchens"])
    filter(@Query() dto: ProductsFilterDto){
        return this.productsPagesService.useFilter(dto);
    }
}
