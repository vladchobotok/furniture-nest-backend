import {Body, Controller, Get, Post, Query, Redirect, Req, Res, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "../entity/users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {Roles} from "./decorators/roles-auth.decorator";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {RolesGuard} from "./guards/roles.guard";
import {FastifyReply} from "fastify";


@Controller('')
export class AuthController {


    constructor(private authService: AuthService) {
    }

    @Post('/login')
    //@Redirect('http://localhost:3000/')
    login(@Body()  userDto: CreateUserDto, @Res({ passthrough: true }) response: FastifyReply){
    let jwt: { token: string };
    return this.authService.login(userDto).then(res => {
            jwt = res;
            response.setCookie('jwt', jwt.token);
            return res;
        });
    }

    @Post('/register')
    @Redirect('http://localhost:3000/login')
    register(@Body()  userDto: CreateUserDto){
        return this.authService.register(userDto);
    }

    @Post('/logout')
    @Redirect('http://localhost:3000/')
    logout(){
        return ;
    }

    @UseGuards(RolesGuard)
    @Roles("USER")
    @Get('/profile')
    getProfile(){
        return ;
    }
}
