import {Body, Controller, Get, Injectable, Post, Res, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {AdminService} from "./admin.service";
import {CreateProductDto} from "../entity/products/dto/create-product.dto";
import {FilesFastifyInterceptor} from "fastify-file-interceptor";
import {BrandsService} from "../entity/brands/brands.service";
import {TypesService} from "../entity/types/types.service";

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService,
                private brandService: BrandsService,
                private typeService: TypesService) {}

    @Get()
    getAdmin(){
        return Promise.all([this.brandService.getAllBrands(), this.typeService.getAllTypes()])
    }

    @Post('createProduct')
    @UseInterceptors(FilesFastifyInterceptor("images"))
    createProduct(@Body() dto: CreateProductDto, @UploadedFiles() images: any[], @Res() res)
    {
        res.redirect('/admin')
        return this.adminService.createProduct(dto, images)
    }
}
