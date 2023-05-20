import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {TypesService} from "./types.service";
import {CreateTypeDto} from "./dto/create-type.dto";
import {Roles} from "../../auth/decorators/roles-auth.decorator";
import {RolesGuard} from "../../auth/guards/roles.guard";


@Controller('/api/types')
export class TypesController {

    constructor(private typesService: TypesService) {}
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateTypeDto){
        return this.typesService.createType(dto)
    }
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getTypeById(@Param('value') value: number){
        return this.typesService.getTypeById(value)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/all')
    getAllTypes(){
        return this.typesService.getAllTypes()
    }
}
