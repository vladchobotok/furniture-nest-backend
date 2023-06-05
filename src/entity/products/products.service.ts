import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductsFilterDto} from "../../products-pages/dto/products-filter.dto";
import {BrandsService} from "../brands/brands.service";
import {Brand} from "../brands/brands.model";
import {TypesService} from "../types/types.service";
import {Type} from "../types/types.model";
import {Op} from "sequelize";

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product,
                private brandsService: BrandsService,
                private typesService: TypesService) {}
    async createProduct(dto: CreateProductDto){
        const product = await this.productRepository.create(dto)
        return product
    }

    async getAllProducts(){
        return await this.productRepository.findAll({include: {all: true}})
    }

    async getFilteredProducts(dto: ProductsFilterDto){
        const type : Type = await this.typesService.getTypeByTypeName(dto.type)
        const typeId : number = type.id
        const brands: Brand[] = [];
        for (const brand of dto.brands) {
            brands.push(await this.brandsService.getBrandByBrandName(brand));
        }
        const brandsId: number [] = brands.map(brand => brand.id)
        const minPrice : number = dto.price[0];
        const maxPrice : number = dto.price[1];
        return await this.productRepository.findAll({where:{typeId: typeId, brandId: {[Op.or]:brandsId}, price:{[Op.between]:[minPrice, maxPrice]}}})
    }
}
