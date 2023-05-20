import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {CartsService} from "./carts.service";
import {CreateCartDto} from "./dto/create-cart.dto";
import {Roles} from "../../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../../auth/guards/roles.guard";

@Controller('/api/carts')
export class CartsController {

    constructor(private cartsService: CartsService) {}
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateCartDto){
        return this.cartsService.createCart(dto)
    }
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getCartByUserId(@Param('value') value: number){
        return this.cartsService.getCartByUserId(value)
    }
}
