import { CustomerGroup } from "src/customer-groups/customer-groups.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @ManyToOne(() => CustomerGroup, (group) => group.customers)
    group: CustomerGroup
}