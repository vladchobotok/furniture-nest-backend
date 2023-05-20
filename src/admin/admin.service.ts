import {Injectable} from '@nestjs/common';
import {ProductsService} from "../entity/products/products.service";
import {CreateProductDto} from "../entity/products/dto/create-product.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class AdminService {

    constructor(private productsService: ProductsService,
                private filesService: FilesService) {}

    async createProduct(dto: CreateProductDto, images: any){
        const fileNames : string[] = [];
        for (const image of images) {
            fileNames.push(await this.filesService.createFiles(image));
        }
        const product = await this.productsService.createProduct({...dto, images: fileNames})
        return product;
    }
}
