import { Injectable } from '@nestjs/common';
import {UsersService} from "../entity/users/users.service";
import {JwtService} from "@nestjs/jwt";
import {ProductsService} from "../entity/products/products.service";
import {ProductsFilterDto} from "./dto/products-filter.dto";

@Injectable()
export class ProductsPagesService {

    constructor(private productsService: ProductsService) {
    }

    async useFilter(dto: ProductsFilterDto){
        const products = await this.productsService.getFilteredProducts(dto);
        return products
    }
}
