import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import {Roles} from "../../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../../auth/guards/roles.guard";

@Controller('/api/roles')
export class RolesController {

    constructor(private rolesService: RolesService) {}
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.rolesService.createRole(dto)
    }
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getRoleByValue(@Param('value') value: string){
        return this.rolesService.getRoleByValue(value)
    }
}
