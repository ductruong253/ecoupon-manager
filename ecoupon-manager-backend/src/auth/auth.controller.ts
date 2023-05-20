import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCustomerDto } from 'src/customers/dtos/login-customer.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/login')
    async login(@Body() loginDto: LoginCustomerDto) {
        return this.authService.login(loginDto);
    }
}
