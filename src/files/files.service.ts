import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import {join} from "path";
@Injectable()
export class FilesService {

    async createFiles(file: any): Promise<string>{
        try{
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve(__dirname, '../..', 'public')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})

            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName;
        } catch(e){
            throw new HttpException('Error caused while writing file', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
