import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../entity/users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@Controller('')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    login(@Body()  userDto: CreateUserDto){
        return this.authService.login(userDto);
    }

    @Post('/register')
    register(@Body()  userDto: CreateUserDto){
        return this.authService.register(userDto);
    }
}
