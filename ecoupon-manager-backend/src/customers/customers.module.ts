import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { JwtModule } from '@nestjs/jwt';
import { CustomerGroupsService } from 'src/customer-groups/customer-groups.service';
import { CustomerGroup } from 'src/customer-groups/customer-groups.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, CustomerGroup]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1d'
      },
    }),
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerGroupsService, AuthService, JwtStrategy, LocalStrategy]
})
export class CustomersModule {}
