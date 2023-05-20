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
    getHome(){
        return Promise.all(
            [this.productsService.getAllProducts(),
                this.brandService.getAllBrands(),
                this.typeService.getAllTypes()
            ])
    }
}
