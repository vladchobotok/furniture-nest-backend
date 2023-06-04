import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {ProductsModule} from "../entity/products/products.module";
import {FilesModule} from "../files/files.module";
import {BrandsModule} from "../entity/brands/brands.module";
import {TypesModule} from "../entity/types/types.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
      ProductsModule,
      FilesModule,
      BrandsModule,
      TypesModule,
      JwtModule
  ]
})
export class AdminModule {}
