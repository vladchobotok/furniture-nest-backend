import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Type} from "./types.model";
import {TypesController} from "./types.controller";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [TypesController],
  exports: [TypesService],
  imports: [
    SequelizeModule.forFeature([Type]),
    JwtModule
  ],
  providers: [TypesService]
})
export class TypesModule {}
