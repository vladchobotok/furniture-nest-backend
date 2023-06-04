import {Module, OnModuleInit} from '@nestjs/common';
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
import {UsersService} from "./entity/users/users.service";
import {RolesService} from "./entity/roles/roles.service";
import {BrandsService} from "./entity/brands/brands.service";
import {ProductsService} from "./entity/products/products.service";
import {TypesService} from "./entity/types/types.service";
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
export class AppModule implements OnModuleInit{

  constructor(private usersService: UsersService,
              private rolesService: RolesService,
              private brandsService: BrandsService,
              private cartsService: CartsService,
              private productsService: ProductsService,
              private typesService: TypesService) {
  }

  async onModuleInit() {
    // await this.rolesService.createRole({value: "USER"});
    // await this.rolesService.createRole({value: "ADMIN"});
    //
    // await this.usersService.createUser({name:"Ivan", surname:"Ivanov", email:"admin@gmail.com", password:"$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2"})
    // await this.usersService.createUser({name:"Petro", surname:"Petrov", email:"user1@gmail.com", password:"$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2"})
    // await this.usersService.createUser({name:"Anton", surname:"Antonov", email:"user2@gmail.com", password:"$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2"})
    // await this.usersService.createUser({name:"Mariya", surname:"Makarova", email:"user3@gmail.com", password:"$2a$05$4PbrVxCF7wZCPEUGEJoPc.wELVwlELa3H2S7AtgjTWQk9O83c66k2"})
    //
    // await this.usersService.addRole({value:"ADMIN", userId: 1})
    //
    // await this.brandsService.createBrand({brandName:"Vikom"})
    // await this.brandsService.createBrand({brandName:"Yudin"})
    // await this.brandsService.createBrand({brandName:"Novelty"})
    // await this.brandsService.createBrand({brandName:"EcoDiv"})
    // await this.brandsService.createBrand({brandName:"HTO"})
    //
    // await this.typesService.createType({typeName:"Дивани"})
    // await this.typesService.createType({typeName:"Ліжка"})
    // await this.typesService.createType({typeName:"Крісла"})
    // await this.typesService.createType({typeName:"Комоди"})
    // await this.typesService.createType({typeName:"Шафи"})
    // await this.typesService.createType({typeName:"Кухні"})
    //
    // await this.cartsService.createCart({userId: 1})
    // await this.cartsService.createCart({userId: 2})
    // await this.cartsService.createCart({userId: 3})
    // await this.cartsService.createCart({userId: 4})
    //
    // await this.productsService.createProduct({name:"Horizonte", price:25000, title:"Minotti Horizonte", description:"A floating island with square lines that marks the horizon of the living space.", inStock:3, images:["5867afe4-a3e5-4b1c-b9cf-60216916c553.jpg", "ee970867-28a3-43ab-8f65-8077bb8f0631.jpg", "258a4c23-3982-406a-9e8b-e10e590577a1.jpg"], typeId:1, brandId:1})
    // await this.productsService.createProduct({name:"Twiggy", price:30000, title:"Minotti Twiggy", description:"A new aggregative language is born: free from schemes and preconfigurations, capable of adapting to needs in continuous evolution.", inStock:5, images:["c5da9241-15ea-43e0-a394-6ac567b5bda4.jpg", "37c10d54-da17-4036-aaf4-912ce87620a0.jpg"], typeId:1, brandId:2})
    // await this.productsService.createProduct({name:"Ліжко Рамона", price:8999, title:"Ліжко Рамона", description:"Сучасна стильна спальня", inStock:4, images:["7981d306-0dc3-4af4-b14d-92a0891e3eb8.jpg"], typeId:2, brandId:3})
    // await this.productsService.createProduct({name:"Ліжко Честер", price:7999, title:"Ліжко Честер", description:"Сучасна стильна спальня", inStock:5, images:["983556ef-c2f3-49ea-bb0c-7d67d3dd5ec9.jpg"], typeId:2, brandId:4})
    // await this.productsService.createProduct({name:"Ліжко Венеція люкс", price:8999, title:"Ліжко Венеція люкс", description:"Сучасна стильна спальня", inStock:6, images:["e86149ee-e4a8-4dcd-96af-ecefdbacd6b6.jpg"], typeId:2, brandId:4})
    // await this.productsService.createProduct({name:"Ліжко Імперія", price:8999, title:"Ліжко Імперія", description:"Сучасна стильна спальня", inStock:7, images:["2f49f1c1-f75e-4677-8ca8-2e0a043ae345.jpg"], typeId:2, brandId:3})
    // await this.productsService.createProduct({name:"Ліжко Адель", price:8999, title:"Ліжко Адель", description:"Сучасна стильна спальня", inStock:8, images:["60bdb7ac-8c96-4975-b4c4-9f0b45ebf446.jpg"], typeId:2, brandId:1})
    // await this.productsService.createProduct({name:"Ліжко Атлант", price:7999, title:"Ліжко Атлант", description:"Сучасна стильна спальня", inStock:9, images:["05635611-c03a-4b10-862b-cb427ba031f2.jpg"], typeId:2, brandId:2})
    // await this.productsService.createProduct({name:"Домашнє крісло", price:11800, title:"Домашнє крісло з неповторним сучасним дизайном", description:"Домашнє крісло з неповторним сучасним дизайном", inStock:6, images:["bd3098ca-5f20-4cb9-850f-a214efa48231.jpg",  "63835c64-7cd4-442b-bd7b-1e31c49b27b7.jpg"], typeId:3, brandId:3})
    // await this.productsService.createProduct({name:"Комод Глорія", price:16712, title:"Комод Глорія 3-дверний", description:"Комод Глорія 3-дверний", inStock:4, images:["93a4db77-788a-4f76-aba1-14dfd1ccfb00.jpg"], typeId:4, brandId:5})
    // await this.productsService.createProduct({name:"Шафа для одягу", price:6340, title:"Шафа для одягу", description:"Шафа для одягу", inStock:6, images:["a74e2de1-99fa-4ef6-9df2-84f33ac5a585.jpg"], typeId:5, brandId:3})
    // await this.productsService.createProduct({name:"Кухня модульна", price:9000, title:"Кухня модульна", description:"Кухня модульна", inStock:1, images:["9b998c3b-4058-49a4-ad39-2f407b89e22e.jpg", "ecc9fe21-0f9c-440f-b6cf-4eff64c2cc02.jpg"], typeId:6, brandId:2})
  }
}
