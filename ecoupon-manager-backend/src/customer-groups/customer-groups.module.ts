import { Module } from '@nestjs/common';
import { CustomerGroupsService } from './customer-groups.service';
import { CustomerGroupsController } from './customer-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerGroup } from './customer-groups.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerGroup]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1d'
      },
    })
  ],
  providers: [CustomerGroupsService],
  controllers: [CustomerGroupsController]
})
export class CustomerGroupsModule {}
