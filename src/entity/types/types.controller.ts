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
    @Get('/id/:id')
    getTypeById(@Param('id') id: number){
        return this.typesService.getTypeById(id)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/all')
    getAllTypes(){
        return this.typesService.getAllTypes()
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getTypeByTypeName(@Param('value') value: string){
        return this.typesService.getTypeByTypeName(value)
    }
}
