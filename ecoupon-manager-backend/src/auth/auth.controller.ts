import { Body, Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCustomerDto } from 'src/customers/dtos/login-customer.dto';
import { SessionGuard } from 'src/guards/session.guard';
import { CurrentCustomer } from 'src/customers/decorators/current-customer.decorator';
import { Customer } from 'src/customers/customer.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/login')
    async login(@Body() loginDto: LoginCustomerDto, @Session() session: any) {
        const payload = this.authService.login(loginDto);
        session.customerId = (await payload).customer.id
        return { "access-token": (await payload).access_token }
    }

    //for testing
    @Get('/whoami')
    @UseGuards(SessionGuard)
    whoAmI(@CurrentCustomer() user: Customer) {
        return user;
    }
}

