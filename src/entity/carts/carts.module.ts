import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {CartsService} from "./carts.service";
import {Cart} from "./carts.model";
import {CartsController} from "./carts.controller";
import {Product} from "../products/products.model";
import {CartsProducts} from "../carts-products/carts-products.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [CartsController],
    exports: [CartsService],
    imports: [
        SequelizeModule.forFeature([Cart, Product, CartsProducts]),
        JwtModule
    ],
    providers: [CartsService]
})
export class CartsModule {}
