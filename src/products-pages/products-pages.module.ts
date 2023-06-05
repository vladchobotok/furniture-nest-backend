import { Module } from '@nestjs/common';
import {HomeController} from "../home/home.controller";
import {HomeService} from "../home/home.service";
import {ProductsModule} from "../entity/products/products.module";
import {BrandsModule} from "../entity/brands/brands.module";
import {TypesModule} from "../entity/types/types.module";
import {ProductsPagesController} from "./products-pages.controller";
import {ProductsPagesService} from "./products-pages.service";

@Module({
    controllers: [ProductsPagesController],
    providers: [ProductsPagesService],
    imports:[
        ProductsModule
    ]
})
export class ProductsPagesModule {}
