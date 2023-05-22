import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './entity/users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./entity/users/users.model";
import { RolesModule } from './entity/roles/roles.module';
import {Role} from "./entity/roles/roles.model";
import {UsersRoles} from "./entity/users-roles/users-roles.model";
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './entity/brands/brands.module';
import { CartsService } from './entity/carts/carts.service';
import { CartsController } from './entity/carts/carts.controller';
import { CartsModule } from './entity/carts/carts.module';
import { ProductsModule } from './entity/products/products.module';
import { TypesController } from './entity/types/types.controller';
import { TypesModule } from './entity/types/types.module';
import {Cart} from "./entity/carts/carts.model";
import {Type} from "./entity/types/types.model";
import {Brand} from "./entity/brands/brands.model";
import {CartsProducts} from "./entity/carts-products/carts-products.model";
import {Product} from "./entity/products/products.model";
import { AdminModule } from './admin/admin.module';
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { HomeModule } from './home/home.module';
import * as path from "path";
import { join } from 'path';
@Module({
  controllers: [],
  providers: [],
  imports: [
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      // ServeStaticModule.forRoot({
      //   rootPath: path.resolve(__dirname, '..', 'public'),
      // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [User, Role, UsersRoles, Cart, Type, Brand, CartsProducts, Product],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    BrandsModule,
    CartsModule,
    ProductsModule,
    TypesModule,
    AdminModule,
    FilesModule,
    HomeModule,
  ],
})
export class AppModule {}
