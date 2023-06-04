import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../entity/users/dto/create-user.dto";
import {UsersService} from "../entity/users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import {User} from "../entity/users/users.model";
import * as process from "process";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto)
        return await this.generateToken(user);
    }

    async register(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return await this.generateToken(user);
    }

    private async generateToken(user: User){
        const payload = {id: user.id, name: user.name, surname: user.surname, email: user.email,  roles: user.roles}
        return {
            token: this.jwtService.sign(payload, {secret: process.env.PRIVATE_KEY})
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const arePasswordsEqual = await bcrypt.compare(userDto.password, user.password)
        if(user && arePasswordsEqual){
            return user;
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}
