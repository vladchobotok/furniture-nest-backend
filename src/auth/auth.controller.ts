import {Body, Controller, Get, Post, Query, Redirect, Req, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "../entity/users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {Roles} from "./decorators/roles-auth.decorator";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";


@Controller('')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    @Redirect('http://localhost:3000/')
    login(@Body()  userDto: CreateUserDto){
        return this.authService.login(userDto);
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

    @Roles("USER")
    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    @Redirect('http://localhost:3000/')
    getProfile(){
        return ;
    }
}
