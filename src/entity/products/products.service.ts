import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {CreateProductDto} from "./dto/create-product.dto";

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product) {}
    async createProduct(dto: CreateProductDto){
        const product = await this.productRepository.create(dto)
        return product
    }

    async getAllProducts(){
        return await this.productRepository.findAll({include: {all: true}})
    }
}
