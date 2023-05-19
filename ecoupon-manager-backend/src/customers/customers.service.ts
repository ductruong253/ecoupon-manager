import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { CustomerGroupsService } from 'src/customer-groups/customer-groups.service';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer) private repo: Repository<Customer>,
        private groupService: CustomerGroupsService
    ) {}

    async createCustomer(customerDto: CreateCustomerDto) {
        const group = await this.groupService.getById(customerDto.groupId)
        if (!group) {
            throw new NotFoundException('groupId is invalid');
        }
        const customer = this.repo.create(customerDto)
        customer.group = group
        return this.repo.save(customer)
    }

    async getCustomerById(id: number) {
        if (!id) {
            return null
        }
        const customer = await this.repo.findOneBy({id})
        return customer
    }
}
