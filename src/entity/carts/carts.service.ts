import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Cart} from "./carts.model";
import {CreateCartDto} from "./dto/create-cart.dto";

@Injectable()
export class CartsService {

    constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}
    async createCart(dto: CreateCartDto){
        const cart = await this.cartRepository.create(dto)
        return cart
    }

    async getCartByUserId(id: number){
        const cart = await this.cartRepository.findOne({where: {id}})
        return cart
    }
}
