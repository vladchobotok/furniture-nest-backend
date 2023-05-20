import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Brand} from "./brands.model";
import {CreateBrandDto} from "./dto/create-brand.dto";

@Injectable()
export class BrandsService {

    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {
    }

    async createBrand(dto: CreateBrandDto){
        const brand = await this.brandRepository.create(dto);
        return brand;
    }

    async getBrandById(id: number){
        const brand = await this.brandRepository.findByPk(id);
        return brand;
    }

    async getAllBrands(){
        return await this.brandRepository.findAll({include: {all: true}});
    }
}
