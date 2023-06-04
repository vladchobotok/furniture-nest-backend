import {
    Body,
    Controller,
    Get,
    Injectable,
    Post,
    Redirect,
    Res,
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AdminService} from "./admin.service";
import {CreateProductDto} from "../entity/products/dto/create-product.dto";
import {FilesFastifyInterceptor} from "fastify-file-interceptor";
import {BrandsService} from "../entity/brands/brands.service";
import {TypesService} from "../entity/types/types.service";
import {Roles} from "../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../auth/guards/roles.guard";

@Controller('admin')
export class AdminController {

    constructor(private adminService: AdminService,
                private brandService: BrandsService,
                private typeService: TypesService) {}

    @Get()
    @UseGuards(RolesGuard)
    @Roles("ADMIN")
    getAdmin(){
        const data = Promise.all([this.brandService.getAllBrands(), this.typeService.getAllTypes()])
        return data
    }

    @Post('createProduct')
    @Redirect('https://localhost:3000/admin')
    @UseGuards(RolesGuard)
    @Roles("ADMIN")
    @UseInterceptors(FilesFastifyInterceptor("images"))
    createProduct(@Body() dto: CreateProductDto, @UploadedFiles() images: any[])
    {
        const data = this.adminService.createProduct(dto, images)
        return data
    }
}
