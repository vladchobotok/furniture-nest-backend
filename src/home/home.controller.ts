import {Controller, Get} from '@nestjs/common';

import {BrandsService} from "../entity/brands/brands.service";
import {TypesService} from "../entity/types/types.service";
import {ProductsService} from "../entity/products/products.service";

@Controller('')
export class HomeController {
    constructor(private productsService: ProductsService,
                private brandService: BrandsService,
                private typeService: TypesService) {}
    @Get()
    getHome()
    {
        const data = Promise.all(
            [this.brandService.getAllBrands(),
                this.typeService.getAllTypes(),
                this.productsService.getAllProducts()
            ])
        return data
    }
}
