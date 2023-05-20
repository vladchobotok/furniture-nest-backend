import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import {ProductsModule} from "../entity/products/products.module";
import {BrandsModule} from "../entity/brands/brands.module";
import {TypesModule} from "../entity/types/types.module";

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports:[
      ProductsModule,
    BrandsModule,
    TypesModule
  ]
})
export class HomeModule {}
