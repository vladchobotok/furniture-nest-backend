import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../users/users.model";
import {UsersRoles} from "../users-roles/users-roles.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
      SequelizeModule.forFeature([Role, User, UsersRoles]),
      JwtModule
  ],
    exports: [RolesService]
})
export class RolesModule {}
