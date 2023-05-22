import {Body, Controller, Post, Redirect} from '@nestjs/common';
import {CreateUserDto} from "../entity/users/dto/create-user.dto";
import {AuthService} from "./auth.service";

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
}
