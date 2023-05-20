import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Brand} from "./brands.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [BrandsController],
  exports: [BrandsService],
  imports: [
    SequelizeModule.forFeature([Brand]),
    JwtModule
  ],
  providers: [BrandsService]
})
export class BrandsModule {}
