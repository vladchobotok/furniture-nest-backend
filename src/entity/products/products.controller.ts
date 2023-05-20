import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {CreateProductDto} from "./dto/create-product.dto";
import {Roles} from "../../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../../auth/guards/roles.guard";

@Controller('/api/products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateProductDto){
        return this.productsService.createProduct(dto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts()
    }
}
