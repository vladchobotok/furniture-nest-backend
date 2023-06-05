import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {BrandsService} from "./brands.service";
import {CreateBrandDto} from "./dto/create-brand.dto";
import {Roles} from "../../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../../auth/guards/roles.guard";

@Controller('/api/brands')
export class BrandsController {

    constructor(private brandsService: BrandsService) {}

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateBrandDto){
        return this.brandsService.createBrand(dto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/id/:id')
    getBrandById(@Param('id') id: number){
        return this.brandsService.getBrandById(id)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/all')
    getAll(){
        return this.brandsService.getAllBrands()
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getBrandByBrandName(@Param('value') value: string){
        return this.brandsService.getBrandByBrandName(value)
    }
}
