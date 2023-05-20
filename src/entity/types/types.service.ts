import {InjectModel} from "@nestjs/sequelize";
import {Type} from "./types.model";
import {CreateTypeDto} from "./dto/create-type.dto";

export class TypesService {

    constructor(@InjectModel(Type) private typeRepository: typeof Type) {
    }

    async createType(dto: CreateTypeDto){
        const type = await this.typeRepository.create(dto);
        return type;
    }

    async getTypeById(id: number){
        const type = await this.typeRepository.findByPk(id);
        return type;
    }

    async getAllTypes(){
        return await this.typeRepository.findAll({include: {all: true}});
    }
}
