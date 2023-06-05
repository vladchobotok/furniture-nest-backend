import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Cart} from "../carts/carts.model";
import {Product} from "./products.model";
import {CartsProducts} from "../carts-products/carts-products.model";
import {FilesModule} from "../../files/files.module";
import {JwtModule} from "@nestjs/jwt";
import {BrandsModule} from "../brands/brands.module";
import {TypesModule} from "../types/types.module";

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
      SequelizeModule.forFeature([Cart, Product, CartsProducts]),
      FilesModule,
      JwtModule,
      BrandsModule,
      TypesModule,
  ],
  exports: [ProductsService]
})
export class ProductsModule {}
